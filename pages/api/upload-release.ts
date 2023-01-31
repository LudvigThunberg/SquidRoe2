import { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../database/DB';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const upload = db.uploadRelease(req.body);
    res.status(200).send(upload);
  } catch (error: any) {
    res.send(error);
  }
}
