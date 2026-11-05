import { NextApiRequest, NextApiResponse } from 'next';

import sgMail from '@sendgrid/mail';

import { getEmailSenderBySwimmingPoolId } from '~/utils/swimming-pool-application';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    email,
    firstName,
    lastName,
    templateId,
    day,
    price,
    category,
    swimmingPoolId,
  } = req.body;

  sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY ?? '');

  const msg = {
    to: email,
    from: getEmailSenderBySwimmingPoolId(swimmingPoolId),
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    template_id: templateId,
    dynamic_template_data: {
      firstName,
      lastName,
      day,
      price,
      category,
    },
  };

  try {
    const email = await sgMail.send(msg);
    return res.send({ data: email, email });
  } catch (error) {
    console.error('Failed to send email:', error);

    const statusCode =
      error instanceof Error &&
      'code' in error &&
      typeof error.code === 'number'
        ? error.code
        : 500;

    return res.status(statusCode).send({ message: 'Failed to send email' });
  }
};

export default handler;
