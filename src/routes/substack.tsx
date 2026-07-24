import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/substack")({
  head: () => ({
    meta: [
      { title: "Substack — Sapiens Optimizado" },
      {
        name: "description",
        content:
          "Ensayos y reflexiones semanales sobre estilo de vida holístico. Lee y suscríbete en sapiensoptimizado.substack.com.",
      },
      { property: "og:title", content: "Substack — Sapiens Optimizado" },
      {
        property: "og:description",
        content: "Ensayos y reflexiones semanales.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SubstackPage,
});

function SubstackPage() {
  return (
    <div className="so-page">
      <SiteNav />
      <section className="so-pageHero">
        <div className="so-container">
          <p className="so-eyebrow">Substack</p>
          <h1 className="so-h1">Ensayos para el héroe moderno.</h1>
          <p className="so-lede">
            Cada semana publico una carta larga sobre los 5 pilares del Sapiens
            Optimizado: movimiento, comunicación, estilo de vida, nutrición y
            sexualidad. Sin fórmulas, sin ruido — solo pensamiento honesto.
          </p>
          <div className="so-actions">
            <a
              href="https://sapiensoptimizado.substack.com"
              target="_blank"
              rel="noreferrer"
              className="so-btn"
            >
              Abrir el Substack →
            </a>
            <a
              href="https://sapiensoptimizado.substack.com/subscribe"
              target="_blank"
              rel="noreferrer"
              className="so-btn so-btn--ghost"
            >
              Suscribirme gratis
            </a>
          </div>
        </div>
      </section>

      <section className="so-section">
        <div className="so-container so-grid so-grid--2">
          <article className="so-card">
            <h3>Qué encontrarás</h3>
            <ul className="so-list">
              <li>Ensayos largos, publicados cada domingo.</li>
              <li>Notas cortas y reflexiones a mitad de semana.</li>
              <li>Entrevistas escritas con mentores y practicantes.</li>
              <li>Archivo completo abierto para suscriptores.</li>
            </ul>
          </article>
          <article className="so-card">
            <h3>Sobre el autor</h3>
            <p>
              Sapiens Optimizado es un espacio de mentoría fundado sobre la
              convicción de que el éxito no debe costar tu cuerpo, tus
              relaciones ni tu salud. El Substack es el diario público de esa
              exploración.
            </p>
            <a
              href="https://sapiensoptimizado.substack.com"
              target="_blank"
              rel="noreferrer"
              className="so-card__link"
            >
              sapiensoptimizado.substack.com →
            </a>
          </article>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
