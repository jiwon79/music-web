import type { NextApiRequest, NextApiResponse } from 'next'
import { google } from 'googleapis';
import 'lib/utils/prototype';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const { sheetName, answers, resultNum, resultString } = req.body;

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        client_id: process.env.GOOGLE_CLIENT_ID,
        private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      },
      scopes: [
        'https://www.googleapis.com/auth/drive',
        'https://www.googleapis.com/auth/drive.file',
        'https://www.googleapis.com/auth/spreadsheets',
      ],
    });

    const sheets = google.sheets({
      auth,
      version: 'v4',
    });

    const koreanDateLocalString = new Date().getKoreanDate().toLocaleString();

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SPREADSHEET_ID,
      range: `${sheetName}!A2:M`,
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[koreanDateLocalString, ...answers, resultNum, resultString]],
      },
    });
    return res.status(201).json({message: 'It works!', response});
  } else if (req.method === 'GET') {
    return res.status(200).json({message: 'Hey!'});
  }
}

export default handler;
