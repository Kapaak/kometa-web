import { auth, sheets } from '@googleapis/sheets';
import { NextApiRequest, NextApiResponse } from 'next';

interface ExtendedNextApiRequest extends NextApiRequest {
  query: {
    gid: string;
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

export default async function handler(
  req: ExtendedNextApiRequest,
  res: NextApiResponse
) {
  const { gid } = req.query ?? {};

  const googleSheets = await initializeGoogleSheets();

  try {
    // Get spreadsheet metadata to find sheet name by GID
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

    const sheetTitle = targetSheet.properties.title;

    if (req.method === 'POST') {
      // Append a new row to the sheet
      const { values } = req.body;
      if (!Array.isArray(values)) {
        throw new Error('Invalid data format. Expected an array of values.');
      }

      const appendResponse = await googleSheets.spreadsheets.values.append({
        spreadsheetId: SPREADSHEET_ID,
        range: `${sheetTitle}`,
        valueInputOption: 'RAW', // Use 'RAW' or 'USER_ENTERED' based on your needs
        insertDataOption: 'INSERT_ROWS', // Ensures data is appended after the last row
        requestBody: {
          values: [values], // Wrap the values in an array to represent a single row
        },
      });

      res
        .status(200)
        .json({ message: 'Row appended successfully', appendResponse });
    } else {
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: 'Failed to process request', details: error });
  }
}
