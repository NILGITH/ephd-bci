import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { name, email, phone, service, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  // IMPORTANT: Configure your email provider credentials in environment variables.
  // Create a .env.local file in your project root and add the following:
  // SMTP_HOST=your_smtp_host
  // SMTP_PORT=your_smtp_port (e.g., 587 or 465)
  // SMTP_USER=your_smtp_username
  // SMTP_PASS=your_smtp_password
  // MAILER_FROM_EMAIL=your_from_email (e.g., no-reply@yourdomain.com)
  // CONTACT_TO_EMAIL=the_email_address_to_receive_contacts

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: Number(process.env.SMTP_PORT) === 465, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const mailOptions = {
    from: `"${name}" <${process.env.MAILER_FROM_EMAIL}>`,
    to: process.env.CONTACT_TO_EMAIL,
    replyTo: email,
    subject: `Nouveau message de contact : ${subject}`,
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h2 style="color: #0056b3;">Nouveau message depuis le formulaire de contact</h2>
        <p>Vous avez reçu un nouveau message de <strong>${name}</strong>.</p>
        <hr>
        <p><strong>Email :</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Téléphone :</strong> ${phone || "Non fourni"}</p>
        <p><strong>Service concerné :</strong> ${service || "Non spécifié"}</p>
        <p><strong>Objet :</strong> ${subject}</p>
        <hr>
        <h3 style="color: #0056b3;">Message :</h3>
        <div style="background-color: #f4f4f4; padding: 15px; border-radius: 5px;">
          <p>${message.replace(/\n/g, "<br>")}</p>
        </div>
        <hr>
        <p style="font-size: 0.8em; color: #777;">Cet email a été envoyé depuis le formulaire de contact du site de l'EPHD Bingerville.</p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Error sending email" });
  }
}
