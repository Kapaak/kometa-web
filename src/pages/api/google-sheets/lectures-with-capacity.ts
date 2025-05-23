import { auth, sheets, sheets_v4 } from '@googleapis/sheets';

import { NextApiRequest, NextApiResponse } from 'next';
import { getLecturesForSwimmingPoolAndCategory } from '~/libs/sanity/api/lecture';
import { getDayAbbreviationWithoutDiacritics } from '~/utils/day';

interface ExtendedNextApiRequest extends NextApiRequest {
  query: {
    //required for sanity to get all lectures
    categoryId?: string;
    swimmingPoolId?: string;
    //required for google sheets to get lectures with full capacity
    gid?: string;
    capacity?: string;
  };
}

const googleAuth = new auth.GoogleAuth({
  credentials: {
    client_email: process.env.NEXT_PUBLIC_CLIENT_EMAIL,
    private_key: process.env.NEXT_PUBLIC_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  },
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const SPREADSHEET_ID = process.env.NEXT_PUBLIC_SPREADSHEET_ID;

async function initializeGoogleSheets() {
  const authClient = (await googleAuth.getClient()) as any;
  return sheets({ version: 'v4', auth: authClient });
}

async function getGoogleSheetByGid(
  googleSheets: sheets_v4.Sheets,
  gid: string
) {
  const metadata = await googleSheets.spreadsheets.get({
    spreadsheetId: SPREADSHEET_ID,
    fields: 'sheets(properties(sheetId,title))',
  });

  const targetSheet = metadata.data.sheets?.find(
    (sheet) => sheet.properties?.sheetId?.toString() === gid
  );

  if (!targetSheet?.properties?.title) {
    throw new Error('Sheet not found with specified GID');
  }

  const response = await googleSheets.spreadsheets.values.get({
    spreadsheetId: SPREADSHEET_ID,
    range: `${targetSheet.properties.title}!A:Z`,
  });

  return response.data.values || [];
}

function filterRowsByCapacity(rows: string[][], capacity: number) {
  if (!rows.length) return { filteredRows: [], filteredOut: [] };

  const header = rows[0];
  const denCasIndex = header.findIndex((col) => col === 'Den a čas');
  if (denCasIndex === -1) {
    throw new Error('"Den a čas" column not found.');
  }

  const counts: Record<string, number> = {};
  for (let i = 1; i < rows.length; i++) {
    const key = rows[i][denCasIndex];
    if (key) counts[key] = (counts[key] || 0) + 1;
  }

  const filteredRows = [header];
  const filteredOutSet = new Set<string>();
  for (let i = 1; i < rows.length; i++) {
    const key = rows[i][denCasIndex];
    if (key && counts[key] < capacity) {
      filteredRows.push(rows[i]);
    } else if (key) {
      filteredOutSet.add(key);
    }
  }

  return {
    filteredRows,
    filteredOut: Array.from(filteredOutSet),
  };
}

export default async function handler(
  req: ExtendedNextApiRequest,
  res: NextApiResponse
) {
  const { categoryId, swimmingPoolId, gid, capacity = 0 } = req.query ?? {};

  try {
    //Get all lectures from sanity
    const lecturesByCategory = await getLecturesForSwimmingPoolAndCategory(
      categoryId as string,
      swimmingPoolId as string
    );

    const googleSheets = await initializeGoogleSheets();

    //Get spreadsheet metadata to find sheet name by GID
    const sheetData = await getGoogleSheetByGid(googleSheets, gid as string);

    const filteredSheetData = filterRowsByCapacity(
      sheetData,
      parseInt(capacity as string, 10)
    );

    const availableLectures = lecturesByCategory?.map((lecture) => {
      const filteredOutSet = new Set(filteredSheetData.filteredOut ?? []);
      const dayTime = `${getDayAbbreviationWithoutDiacritics(Number(lecture?.dayId))}_${lecture.timeFrom}`;
      if (filteredOutSet.has(dayTime)) {
        return { ...lecture, isFull: true };
      }
      return lecture;
    });

    return res.status(200).json(availableLectures);
  } catch (error: any) {
    console.error('Error fetching data:', error);
    return res.status(404).json({ error: error.message });
  }
}
