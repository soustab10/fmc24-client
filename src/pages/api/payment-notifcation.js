import nodemailer from 'nodemailer';
export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { email, name, message } = req.body;
        const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, 
        auth: {
            user: 'your-email',
            pass: 'your-password',
        },
        });
        await transporter.sendMail({
        from: 'your-email',
        to: email,
        subject: `Hello ${name}`,
        text: message,
        html: `<b>${message}</b>`,
        });
        res.status(200).json({ status: 'success' });
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).json({ message: `Method ${req.method} not allowed` });
    }
}