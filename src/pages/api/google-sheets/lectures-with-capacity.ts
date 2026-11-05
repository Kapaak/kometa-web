import { NextApiRequest, NextApiResponse } from 'next';

import { getSheetRows } from '~/libs/google-sheets';
import { getLecturesForSwimmingPoolAndCategory } from '~/libs/sanity/api/lecture';
import { getDayAbbreviationWithoutDiacritics } from '~/utils/day';
import {
  getCategoryApplicationConfig,
  getSpreadsheetId,
} from '~/utils/swimming-pool-application';

interface ExtendedNextApiRequest extends NextApiRequest {
  query: {
    categoryId?: string;
    swimmingPoolId?: string;
  };
}

function filterRowsByCapacity(rows: string[][], lectureCapacity: number) {
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
    if (key && counts[key] < lectureCapacity) {
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
  const { categoryId = '', swimmingPoolId = '' } = req.query ?? {};

  try {
    //Get all lectures from sanity
    const lecturesByCategory = await getLecturesForSwimmingPoolAndCategory(
      categoryId,
      swimmingPoolId
    );

    const spreadsheetId = getSpreadsheetId(swimmingPoolId);
    const category = getCategoryApplicationConfig(swimmingPoolId, categoryId);

    // Pool/category without a Google Sheet -> return lectures from Sanity as they are
    if (!spreadsheetId || !category) {
      return res.status(200).json(lecturesByCategory);
    }

    const sheetData = await getSheetRows(spreadsheetId, category.sheetTabId);

    const filteredSheetData = filterRowsByCapacity(
      sheetData,
      category.lectureCapacity
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
  } catch (error) {
    console.error('Error fetching data:', error);
    return res.status(500).json({ error: 'Failed to fetch lectures' });
  }
}
