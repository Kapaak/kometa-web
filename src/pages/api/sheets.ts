import { auth, sheets } from '@googleapis/sheets';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const googleAuth = new auth.GoogleAuth({
    credentials: {
      client_email: process.env.NEXT_PUBLIC_CLIENT_EMAIL,
      private_key: process.env.NEXT_PUBLIC_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  const authClient = (await googleAuth.getClient()) as any;
  const googleSheets = sheets({ version: 'v4', auth: authClient });

  const spreadsheetId = process.env.NEXT_PUBLIC_SPREADSHEET_ID;

  const targetGid = req.query.gid as string;

  try {
    // Get spreadsheet metadata to find sheet name by GID
    const metadata = await googleSheets.spreadsheets.get({
      spreadsheetId,
      fields: 'sheets(properties(sheetId,title))',
    });

    const targetSheet = metadata.data.sheets?.find(
      (sheet) => sheet.properties?.sheetId?.toString() === targetGid
    );

    if (!targetSheet?.properties?.title) {
      throw new Error('Sheet not found with specified GID');
    }

    const sheetTitle = targetSheet.properties.title;

    if (req.method === 'GET') {
      // Fetch all rows from the sheet
      const response = await googleSheets.spreadsheets.values.get({
        spreadsheetId,
        range: `${sheetTitle}!A:Z`,
      });

      res.status(200).json(response);
    } else if (req.method === 'POST') {
      // Append a new row to the sheet
      const { values } = req.body;
      if (!Array.isArray(values)) {
        throw new Error('Invalid data format. Expected an array of values.');
      }

      const appendResponse = await googleSheets.spreadsheets.values.append({
        spreadsheetId,
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
