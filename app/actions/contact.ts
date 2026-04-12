"use server";

import nodemailer from "nodemailer";

export async function sendContactForm(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const company = formData.get("company") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return { success: false, error: "Faltan campos requeridos." };
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Methodica Web" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `Consulta de ${name}${company ? ` — ${company}` : ""}`,
      text: `Nombre: ${name}\nEmail: ${email}${company ? `\nEmpresa: ${company}` : ""}\n\nMensaje:\n${message}`,
    });

    return { success: true };
  } catch (err) {
    console.error("Contact form error:", err);
    return { success: false, error: "No se pudo enviar el mensaje." };
  }
}
