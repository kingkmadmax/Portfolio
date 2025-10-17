import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json(); // optional if you want dynamic email data

    const { data, error } = await resend.emails.send({
      from: `Kirubel <${process.env.FROM_EMAIL}>`,
      to: [body.to || 'kirubelmamushet@gmail.com'], // dynamic or fallback
      subject: body.subject || 'Hello World',
      html: body.html || `<p>Hello Kirubel! 👋 This is a test email via Resend + Next.js</p>`,
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
