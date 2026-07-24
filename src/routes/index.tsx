import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { NewsletterForm } from "@/components/NewsletterForm";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sapiens Optimizado — Mentoría de Estilo de Vida Holística" },
      {
        name: "description",
        content:
          "Encuentra el equilibrio para que aquello que amas no sea sacrificado en el camino hacia tu destino. Mentoría, programas y recursos para vivir optimizado.",
      },
      { property: "og:title", content: "Sapiens Optimizado" },
      {
        property: "og:description",
        content: "Mentoría de Estilo de Vida Holística.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const startHere = [
  {
    title: "El Mito",
    desc: "Descubre la historia detrás de Sapiens Optimizado — el viaje del héroe que no sacrifica lo que ama.",
    href: "/el-mito",
    cta: "Vivir la historia",
    external: true,
  },
  {
    title: "Programas",
    desc: "Mentorías y masterclasses diseñadas para llevarte al siguiente nivel sin quemarte en el intento.",
    href: "/programas",
    cta: "Ver programas",
  },
  {
    title: "Substack",
    desc: "Ensayos, reflexiones y episodios semanales sobre movimiento, nutrición, sexualidad y propósito.",
    href: "/substack",
    cta: "Leer última edición",
  },
] as const;

const featured = [
  {
    tag: "Ensayo",
    title: "El precio invisible del éxito",
    desc: "Por qué los héroes modernos regresan heridos — y cómo cambiar la ecuación.",
  },
  {
    tag: "Guía",
    title: "5 Pilares del Sapiens Optimizado",
    desc: "Movimiento, comunicación, estilo de vida, nutrición y sexualidad en un solo mapa.",
  },
  {
    tag: "Podcast",
    title: "Conversación con David Meneses",
    desc: "Sobre entrenamiento, disciplina y el arte de sostener una vida coherente.",
  },
];

const testimonials = [
  {
    quote:
      "Sentí que por primera vez alguien entendía que quería crecer sin sacrificar mi salud ni mi familia.",
    name: "Laura M.",
    role: "Emprendedora",
  },
  {
    quote:
      "La mentoría cambió la forma en que veo mi cuerpo, mis relaciones y mi trabajo. Todo empezó a alinearse.",
    name: "Andrés R.",
    role: "Director creativo",
  },
  {
    quote:
      "Los 5 pilares me dieron un mapa claro. Dejé de sentirme fragmentado.",
    name: "Camila S.",
    role: "Profesional de la salud",
  },
];

function Home() {
  return (
    <div className="so-page">
      <SiteNav />

      <section className="so-hero">
        <div className="so-hero__bg" />
        <div className="so-hero__inner">
          <p className="so-eyebrow">Mentoría de Estilo de Vida Holística</p>
          <h1 className="so-hero__title">
            Conquista tu destino <em>sin sacrificar</em> lo que amas.
          </h1>
          <p className="so-hero__sub">
            Un camino diseñado para el héroe moderno: cuerpo, mente, relaciones
            y propósito operando como un solo sistema.
          </p>
          <div className="so-hero__form">
            <NewsletterForm cta="Recibir la carta semanal" />
            <p className="so-hero__hint">
              Únete a la comunidad · Sin spam · Cancela cuando quieras
            </p>
          </div>
        </div>
        <div className="so-hero__scroll">Descender ↓</div>
      </section>

      <section className="so-section">
        <div className="so-container">
          <div className="so-section__head">
            <p className="so-eyebrow">Empieza aquí</p>
            <h2 className="so-h2">Tres puertas de entrada</h2>
            <p className="so-lede">
              Escoge por dónde quieres comenzar tu recorrido dentro de Sapiens
              Optimizado.
            </p>
          </div>
          <div className="so-grid so-grid--3">
            {startHere.map((c) => (
              <article key={c.title} className="so-card">
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
                {c.external ? (
                  <a href={c.href} className="so-card__link">
                    {c.cta} →
                  </a>
                ) : (
                  <Link to={c.href} className="so-card__link">
                    {c.cta} →
                  </Link>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="so-section so-section--alt">
        <div className="so-container">
          <div className="so-section__head so-section__head--split">
            <div>
              <p className="so-eyebrow">Lo más reciente</p>
              <h2 className="so-h2">Episodios y guías destacadas</h2>
            </div>
            <Link to="/recursos" className="so-link">
              Ver todos los recursos →
            </Link>
          </div>
          <div className="so-grid so-grid--3">
            {featured.map((f) => (
              <article key={f.title} className="so-feature">
                <span className="so-feature__tag">{f.tag}</span>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
                <Link to="/recursos" className="so-card__link">
                  Explorar →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="so-section">
        <div className="so-container">
          <div className="so-section__head">
            <p className="so-eyebrow">Prueba social</p>
            <h2 className="so-h2">Historias de quienes ya caminan el sendero</h2>
          </div>
          <div className="so-grid so-grid--3">
            {testimonials.map((t) => (
              <blockquote key={t.name} className="so-quote">
                <p>“{t.quote}”</p>
                <footer>
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </footer>
              </blockquote>
            ))}
          </div>
          <div className="so-logos">
            <span>Featured in</span>
            <div>
              <span>Substack</span>
              <span>Podcast Network</span>
              <span>Wellness MX</span>
              <span>Holistic Living</span>
            </div>
          </div>
        </div>
      </section>

      <section className="so-cta-band">
        <div className="so-container so-cta-band__inner">
          <div>
            <p className="so-eyebrow">Newsletter semanal</p>
            <h2 className="so-h2">Una carta que te devuelve al centro.</h2>
            <p className="so-lede">
              Cada domingo, una idea aplicable sobre los 5 pilares. Directo a tu
              bandeja.
            </p>
          </div>
          <NewsletterForm variant="inline" cta="Suscribirme" />
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
