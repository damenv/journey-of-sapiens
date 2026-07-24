import { useState } from "react";

export function NewsletterForm({
  variant = "primary",
  placeholder = "tu@correo.com",
  cta = "Suscribirme",
}: {
  variant?: "primary" | "inline";
  placeholder?: string;
  cta?: string;
}) {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <form
      className={`so-form so-form--${variant}`}
      onSubmit={(e) => {
        e.preventDefault();
        if (!email) return;
        setSent(true);
      }}
    >
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={placeholder}
        aria-label="Correo electrónico"
      />
      <button type="submit">{sent ? "¡Listo! ✦" : cta}</button>
    </form>
  );
}
