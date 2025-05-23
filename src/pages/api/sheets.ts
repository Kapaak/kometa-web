import { auth, sheets } from '@googleapis/sheets';
import { NextApiRequest, NextApiResponse } from 'next';

interface ExtendedNextApiRequest extends NextApiRequest {
  query: {
    gid: string;
    capacity?: string;
  };
}

export default async function handler(
  req: ExtendedNextApiRequest,
  res: NextApiResponse
) {
  const { gid, capacity } = req.query ?? {};

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

  try {
    // Get spreadsheet metadata to find sheet name by GID
    const metadata = await googleSheets.spreadsheets.get({
      spreadsheetId,
      fields: 'sheets(properties(sheetId,title))',
    });

    const targetSheet = metadata.data.sheets?.find(
      (sheet) => sheet.properties?.sheetId?.toString() === gid
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

      const rows = response.data.values || [];
      if (!rows.length) {
        return res.status(200).json({ values: [] });
      }

      // Find the index of "Den a čas" column
      const header = rows[0];
      const denCasIndex = header.findIndex((col) => col === 'Den a čas');
      if (denCasIndex === -1) {
        return res.status(400).json({ error: '"Den a čas" column not found.' });
      }

      // Only filter if capacity is provided
      if (capacity) {
        const cap = parseInt(capacity, 10);
        // Count occurrences of each "Den a čas"
        const counts: Record<string, number> = {};
        for (let i = 1; i < rows.length; i++) {
          const key = rows[i][denCasIndex];
          if (key) counts[key] = (counts[key] || 0) + 1;
        }

        // Separate filtered and filtered-out rows
        const filteredRows = [header];
        const filteredOutSet = new Set<string>();
        for (let i = 1; i < rows.length; i++) {
          const key = rows[i][denCasIndex];
          if (key && counts[key] < cap) {
            filteredRows.push(rows[i]);
          } else if (key) {
            filteredOutSet.add(key);
          }
        }

        return res.status(200).json({
          values: filteredRows,
          filteredOut: Array.from(filteredOutSet),
        });
      }

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
