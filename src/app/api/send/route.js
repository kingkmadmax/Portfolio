// import { EmailTemplate } from '../../../components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const { data, error } = await resend.emails.send({
      from: 'kirubel <kirubelmamushet@gmail.com>',
      to: ['kirubelmamushet@gmail.com'],
      subject: 'Hello world',
      react: EmailTemplate({ firstName: 'kirubel' }),
    });

    if (error) {
      return (<>
      <p>
        Email body
        </p></>)
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}