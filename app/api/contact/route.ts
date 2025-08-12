import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, phone, company, service, budget, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'rickysilaban384@gmail.com',
        pass: process.env.GMAIL_APP_PASSWORD
      }
    });

    await transporter.sendMail({
      from: `"Website Contact Form" <${email}>`,
      to: 'rickysilaban384@gmail.com',
      subject: `Pesan baru dari ${name}`,
      html: `
        <h3>Detail Pengirim:</h3>
        <p><b>Nama:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Telepon:</b> ${phone}</p>
        <p><b>Perusahaan:</b> ${company}</p>
        <p><b>Layanan:</b> ${service}</p>
        <p><b>Budget:</b> ${budget}</p>
        <h3>Pesan:</h3>
        <p>${message}</p>
      `
    });

    return NextResponse.json({ success: true, message: 'Pesan berhasil dikirim!' });
  } catch (error) {
    console.error('Error kirim email:', error);
    return NextResponse.json({ success: false, message: 'Gagal mengirim pesan' }, { status: 500 });
  }
}

