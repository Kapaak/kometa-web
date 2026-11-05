import { NextApiRequest, NextApiResponse } from 'next';

import { appendSheetRow } from '~/libs/google-sheets';
import {
  getSheetTabId,
  getSpreadsheetId,
} from '~/utils/swimming-pool-application';

type AppendRequestBody = {
  swimmingPoolId?: string;
  categoryId?: string;
  preliminary?: boolean;
  values?: unknown;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const { swimmingPoolId, categoryId, preliminary, values } = (req.body ??
    {}) as AppendRequestBody;

  if (
    !Array.isArray(values) ||
    !values.every((value) => typeof value === 'string')
  ) {
    return res.status(400).json({ error: 'Expected an array of strings.' });
  }

  const spreadsheetId = getSpreadsheetId(swimmingPoolId ?? '');
  const sheetTabId = getSheetTabId(
    swimmingPoolId ?? '',
    categoryId ?? '',
    preliminary
  );

  if (!spreadsheetId || !sheetTabId) {
    return res
      .status(400)
      .json({ error: 'Applications are not open for this category.' });
  }

  try {
    await appendSheetRow(spreadsheetId, sheetTabId, values);

    return res.status(200).json({ message: 'Row appended successfully' });
  } catch (error) {
    console.error('Failed to append row:', error);
    return res.status(500).json({ error: 'Failed to save the application' });
  }
}
