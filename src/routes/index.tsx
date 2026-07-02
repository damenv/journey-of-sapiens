import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sapiens Optimizado — Mentoría de Estilo de Vida Holística" },
      {
        name: "description",
        content:
          "Mentoría de Estilo de Vida Holística. Encuentra el equilibrio para que aquello que amas no sea sacrificado en el camino hacia tu destino.",
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
  component: Index,
});

function Index() {
  useEffect(() => {
    window.location.replace("/site/index.html");
  }, []);
  return (
    <div style={{ minHeight: "100vh", background: "#0a0f0d", color: "#f2ede0", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "system-ui" }}>
      Cargando Sapiens Optimizado…
    </div>
  );
}
