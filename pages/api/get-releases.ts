import { NextApiRequest, NextApiResponse } from 'next';
import { ReleaseModel } from '../../models/responseModels';
import { db } from '../../database/DB';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const releases: ReleaseModel[] = await db.getAllReleases();
    console.log('releases', releases);

    res.status(200).send(releases);
  } catch (error: any) {
    console.log('ERRRRORS: ', error);
    res.send(error);
  }
}
