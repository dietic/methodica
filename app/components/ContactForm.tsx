"use client";

import { useState, type FormEvent } from "react";
import { sendContactForm } from "../actions/contact";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const data = new FormData(e.currentTarget);
    const result = await sendContactForm(data);

    if (result.success) {
      setStatus("sent");
      e.currentTarget.reset();
    } else {
      setStatus("error");
      setErrorMsg(result.error ?? "Ocurrió un error inesperado.");
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form__field">
        <label htmlFor="cf-name" className="contact-form__label">
          Nombre
        </label>
        <input
          id="cf-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className="contact-form__input"
          placeholder="Tu nombre completo"
        />
      </div>

      <div className="contact-form__field">
        <label htmlFor="cf-email" className="contact-form__label">
          Email
        </label>
        <input
          id="cf-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="contact-form__input"
          placeholder="tu@empresa.com"
        />
      </div>

      <div className="contact-form__field">
        <label htmlFor="cf-company" className="contact-form__label">
          Empresa <span className="contact-form__optional">opcional</span>
        </label>
        <input
          id="cf-company"
          name="company"
          type="text"
          autoComplete="organization"
          className="contact-form__input"
          placeholder="Nombre de tu empresa"
        />
      </div>

      <div className="contact-form__field">
        <label htmlFor="cf-message" className="contact-form__label">
          Mensaje
        </label>
        <textarea
          id="cf-message"
          name="message"
          required
          rows={4}
          className="contact-form__input contact-form__textarea"
          placeholder="Cuéntanos sobre tu empresa y cómo podemos ayudarte"
        />
      </div>

      {status === "error" && (
        <p className="contact-form__error">{errorMsg}</p>
      )}

      {status === "sent" ? (
        <p className="contact-form__success">
          Mensaje enviado. Te contactaremos pronto.
        </p>
      ) : (
        <button
          type="submit"
          className="btn btn--vermillion contact-form__submit"
          disabled={status === "sending"}
        >
          {status === "sending" ? "Enviando..." : "Enviar Mensaje"}
        </button>
      )}
    </form>
  );
}
