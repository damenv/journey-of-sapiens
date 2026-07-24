import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { NewsletterForm } from "@/components/NewsletterForm";

export const Route = createFileRoute("/newsletter")({
  head: () => ({
    meta: [
      { title: "Newsletter — Sapiens Optimizado" },
      {
        name: "description",
        content:
          "Recibe una carta semanal sobre estilo de vida holístico. Ideas aplicables sobre los 5 pilares del Sapiens Optimizado.",
      },
      { property: "og:title", content: "Newsletter — Sapiens Optimizado" },
      {
        property: "og:description",
        content: "Una carta semanal que te devuelve al centro.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Newsletter,
});

const benefits = [
  "Una idea aplicable cada domingo, en menos de 5 minutos de lectura.",
  "Acceso anticipado a nuevos programas y masterclasses.",
  "Herramientas y plantillas exclusivas para suscriptores.",
  "Preguntas de reflexión para integrar cada carta en tu semana.",
];

const pastEditions = [
  {
    title: "El precio invisible del éxito",
    desc: "Por qué los héroes modernos regresan heridos de sus batallas.",
  },
  {
    title: "Movimiento como identidad",
    desc: "Cómo dejar de ver el ejercicio como tarea y empezar a habitarlo.",
  },
  {
    title: "Conversaciones difíciles",
    desc: "El pilar de la comunicación en tus relaciones más importantes.",
  },
  {
    title: "Nutrición sin dogma",
    desc: "Principios estables en un mundo lleno de dietas de moda.",
  },
];

function Newsletter() {
  return (
    <div className="so-page">
      <SiteNav />
      <section className="so-pageHero so-pageHero--center">
        <div className="so-container">
          <p className="so-eyebrow">Newsletter</p>
          <h1 className="so-h1">
            Una carta semanal que te devuelve <em>al centro.</em>
          </h1>
          <p className="so-lede">
            Cada domingo recibes una idea aplicable sobre movimiento,
            comunicación, estilo de vida, nutrición y sexualidad.
          </p>
          <div className="so-hero__form">
            <NewsletterForm cta="Quiero recibirla" />
            <p className="so-hero__hint">Gratis · Sin spam · Cancela cuando quieras</p>
          </div>
        </div>
      </section>

      <section className="so-section">
        <div className="so-container so-grid so-grid--2">
          <article className="so-card">
            <h3>Qué obtienes al suscribirte</h3>
            <ul className="so-list">
              {benefits.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </article>
          <article className="so-card">
            <h3>Ediciones recientes</h3>
            <ul className="so-list so-list--plain">
              {pastEditions.map((e) => (
                <li key={e.title}>
                  <strong>{e.title}</strong>
                  <span>{e.desc}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="so-cta-band">
        <div className="so-container so-cta-band__inner">
          <div>
            <p className="so-eyebrow">Únete hoy</p>
            <h2 className="so-h2">Empieza a caminar el sendero.</h2>
          </div>
          <NewsletterForm variant="inline" cta="Suscribirme" />
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
