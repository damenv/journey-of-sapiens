import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/programas")({
  head: () => ({
    meta: [
      { title: "Programas — Sapiens Optimizado" },
      {
        name: "description",
        content:
          "Mentorías, masterclasses y cursos digitales para integrar los 5 pilares del Sapiens Optimizado en tu vida.",
      },
      { property: "og:title", content: "Programas — Sapiens Optimizado" },
      {
        property: "og:description",
        content: "Mentorías y masterclasses de estilo de vida holístico.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Programas,
});

const programs = [
  {
    name: "Mentoría 1:1",
    price: "Inversión personalizada",
    tag: "Insignia",
    desc: "Acompañamiento profundo durante 12 semanas para rediseñar cuerpo, hábitos y propósito.",
    features: [
      "Sesiones semanales privadas",
      "Plan de movimiento y nutrición",
      "WhatsApp directo con tu mentor",
      "Auditoría de estilo de vida",
    ],
  },
  {
    name: "Círculo Sapiens",
    price: "Mensualidad",
    tag: "Comunidad",
    desc: "Membresía grupal con clases en vivo, comunidad activa y un currículum vivo sobre los 5 pilares.",
    features: [
      "2 sesiones grupales al mes",
      "Biblioteca de masterclasses",
      "Comunidad privada",
      "Retos trimestrales",
    ],
  },
  {
    name: "Masterclass Intensivas",
    price: "Desde $49 USD",
    tag: "Autoguiado",
    desc: "Cursos digitales cortos para dominar un pilar a la vez: movimiento, nutrición, sexualidad, comunicación o estilo de vida.",
    features: [
      "Acceso de por vida",
      "Ejercicios y plantillas",
      "Cápsulas de 20 minutos",
      "Certificado de finalización",
    ],
  },
];

function Programas() {
  return (
    <div className="so-page">
      <SiteNav />
      <section className="so-pageHero">
        <div className="so-container">
          <p className="so-eyebrow">Programas</p>
          <h1 className="so-h1">Caminos para integrar los 5 pilares.</h1>
          <p className="so-lede">
            Diseñados para el héroe moderno que quiere resultados sin sacrificar
            su cuerpo, sus relaciones ni su tiempo.
          </p>
        </div>
      </section>

      <section className="so-section">
        <div className="so-container">
          <div className="so-grid so-grid--3">
            {programs.map((p) => (
              <article key={p.name} className="so-program">
                <span className="so-feature__tag">{p.tag}</span>
                <h3>{p.name}</h3>
                <p className="so-program__price">{p.price}</p>
                <p>{p.desc}</p>
                <ul>
                  {p.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <a href="#contacto" className="so-btn so-btn--ghost">
                  Saber más →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
