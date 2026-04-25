"use server";

import nodemailer from "nodemailer";

const INTEREST_LABELS: Record<string, string> = {
  procesos: "Optimizar procesos y operación",
  administrativa: "Delegar la gestión administrativa",
  contable: "Soporte contable y tributario",
  conversar: "Quiero conversar primero",
};

export async function sendContactForm(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const company = formData.get("company") as string;
  const interest = formData.get("interest") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !interest) {
    return { success: false, error: "Faltan campos requeridos." };
  }

  const interestLabel = INTEREST_LABELS[interest] ?? interest;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  const bodyLines = [
    `Nombre: ${name}`,
    `Email: ${email}`,
    company ? `Empresa: ${company}` : null,
    `Interés: ${interestLabel}`,
    message ? `\nMensaje:\n${message}` : null,
  ].filter(Boolean);

  try {
    await transporter.sendMail({
      from: `"Methodica Web" <${process.env.GMAIL_USER}>`,
      to: "hola@methodica.pe",
      replyTo: email,
      subject: `Consulta de ${name}${company ? ` — ${company}` : ""} · ${interestLabel}`,
      text: bodyLines.join("\n"),
    });

    return { success: true };
  } catch (err) {
    console.error("Contact form error:", err);
    return { success: false, error: "No se pudo enviar el mensaje." };
  }
}
