import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/recursos")({
  head: () => ({
    meta: [
      { title: "Recursos — Sapiens Optimizado" },
      {
        name: "description",
        content:
          "Guías descargables, herramientas y lecturas recomendadas para integrar el estilo de vida Sapiens Optimizado.",
      },
      { property: "og:title", content: "Recursos — Sapiens Optimizado" },
      {
        property: "og:description",
        content: "Guías, herramientas y lecturas recomendadas.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Recursos,
});

const filters = ["Todos", "Guías", "Herramientas", "Lecturas"] as const;
type Filter = (typeof filters)[number];

const items: { title: string; type: Exclude<Filter, "Todos">; desc: string }[] = [
  {
    title: "Guía de los 5 Pilares",
    type: "Guías",
    desc: "PDF con auditoría rápida para diagnosticar en qué pilar necesitas enfoque hoy.",
  },
  {
    title: "Plantilla de Semana Optimizada",
    type: "Herramientas",
    desc: "Hoja editable para diseñar tu semana alrededor de movimiento, descanso y trabajo profundo.",
  },
  {
    title: "Lista de lecturas fundamentales",
    type: "Lecturas",
    desc: "Libros que han moldeado la filosofía Sapiens Optimizado.",
  },
  {
    title: "Protocolo de Movimiento Diario",
    type: "Guías",
    desc: "15 minutos al día para mantener el cuerpo del héroe.",
  },
  {
    title: "Journal del Sapiens",
    type: "Herramientas",
    desc: "Prompts diarios para claridad, propósito y relaciones.",
  },
  {
    title: "Ensayos seleccionados",
    type: "Lecturas",
    desc: "Colección curada de textos sobre coherencia y estilo de vida.",
  },
];

function Recursos() {
  const [filter, setFilter] = useState<Filter>("Todos");
  const list = useMemo(
    () => (filter === "Todos" ? items : items.filter((i) => i.type === filter)),
    [filter],
  );

  return (
    <div className="so-page">
      <SiteNav />
      <section className="so-pageHero">
        <div className="so-container">
          <p className="so-eyebrow">Recursos</p>
          <h1 className="so-h1">Herramientas para el camino.</h1>
          <p className="so-lede">
            Descargables y lecturas para aplicar Sapiens Optimizado en tu vida
            diaria.
          </p>
        </div>
      </section>

      <section className="so-section">
        <div className="so-container">
          <div className="so-filters">
            {filters.map((f) => (
              <button
                key={f}
                className={`so-chip ${filter === f ? "is-active" : ""}`}
                onClick={() => setFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>
          <div className="so-grid so-grid--3">
            {list.map((i) => (
              <article key={i.title} className="so-card">
                <span className="so-feature__tag">{i.type}</span>
                <h3>{i.title}</h3>
                <p>{i.desc}</p>
                <a href="#" className="so-card__link">
                  Descargar →
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
