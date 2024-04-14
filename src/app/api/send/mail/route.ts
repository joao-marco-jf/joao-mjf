import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
    const data: {fullname: string, email: string, subject: string, message: string} = await req.json();

    const message = {
        from: data.email,
        to: process.env.GOOGLE_EMAIL,
        subject: data.subject,
        text: data.message,
        html: `
            <div>
                <p>Nome: ${data.fullname}</p>
                <p>E-mail: ${data.email}</p>
                <p>${data.message}</p>
            </div>
        `,
    };

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
        user: process.env.GOOGLE_EMAIL,
        pass: process.env.GOOGLE_PASSWORD,
        },
    });

    transporter.sendMail(message, (err, info) => {
        if (err) {
        return NextResponse.json({
            error: `Connection refused at ${err.cause}`
        }, {status:404});
        } else {
        return NextResponse.json({
            success: `Message delivered to ${info.accepted}`
        }, {status: 250});
        }
    });
    return NextResponse.json({"message": "ok"}, {status: 200})
}