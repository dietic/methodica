"use client";

import { useState } from "react";

export default function FaqItem({
  question,
  children,
}: {
  question: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`faq__item${open ? " active" : ""}`}>
      <button
        className="faq__question"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span>{question}</span>
        <span className="faq__icon" aria-hidden="true">+</span>
      </button>
      <div className="faq__answer" role="region">
        <div className="faq__answer-inner">{children}</div>
      </div>
    </div>
  );
}
