import { auth, sheets } from '@googleapis/sheets';

// Server only: uses the service account credentials.

const googleAuth = new auth.GoogleAuth({
  credentials: {
    client_email: process.env.NEXT_PUBLIC_CLIENT_EMAIL,
    private_key: process.env.NEXT_PUBLIC_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  },
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

// GoogleAuth fetches and refreshes the access token on its own
const googleSheets = sheets({ version: 'v4', auth: googleAuth });

async function getSheetTitle(spreadsheetId: string, sheetTabId: number) {
  const metadata = await googleSheets.spreadsheets.get({
    spreadsheetId,
    fields: 'sheets(properties(sheetId,title))',
  });

  const title = metadata.data.sheets?.find(
    (sheet) => sheet.properties?.sheetId === sheetTabId
  )?.properties?.title;

  if (!title) {
    throw new Error(`Sheet tab ${sheetTabId} not found`);
  }

  return title;
}

export async function getSheetRows(spreadsheetId: string, sheetTabId: number) {
  const title = await getSheetTitle(spreadsheetId, sheetTabId);

  const response = await googleSheets.spreadsheets.values.get({
    spreadsheetId,
    range: `${title}!A:Z`,
  });

  return response.data.values ?? [];
}

export async function appendSheetRow(
  spreadsheetId: string,
  sheetTabId: number,
  values: string[]
) {
  const title = await getSheetTitle(spreadsheetId, sheetTabId);

  return googleSheets.spreadsheets.values.append({
    spreadsheetId,
    range: title,
    valueInputOption: 'RAW',
    insertDataOption: 'INSERT_ROWS',
    requestBody: { values: [values] },
  });
}
