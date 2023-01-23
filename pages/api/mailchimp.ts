import type { NextApiRequest, NextApiResponse } from 'next';

const mailchimp = require('@mailchimp/mailchimp_marketing');

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX,
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { email, name } = req.body;

  try {
    const response = await mailchimp.lists.addListMember(
      process.env.MAILCHIMP_LIST_ID,
      {
        email_address: email,
        status: 'subscribed',
        tags: ['Website Subscriber'],
        merge_fields: {
          FNAME: name,
        },
      },
    );
    res.send(response);
  } catch (error: any) {
    if (error.status) {
      res.status(error.status).send(error);
    } else {
      res.status(500).send(error);
    }
  }
}
