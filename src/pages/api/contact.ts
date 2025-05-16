// pages/api/contact.ts
import nodemailer from "nodemailer";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_TO,
      subject: `New message from ${name}`,
      text: message,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true });
    } catch (err) {
      console.error("Error sending email:", err);
      res.status(500).json({ success: false, error: err });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
