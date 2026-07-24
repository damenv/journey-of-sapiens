import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/el-mito")({
  head: () => ({
    meta: [
      { title: "El Mito — Sapiens Optimizado" },
      {
        name: "description",
        content:
          "El viaje del héroe moderno: descubre la historia detrás de Sapiens Optimizado y por qué el sacrificio no es el precio del éxito.",
      },
      { property: "og:title", content: "El Mito — Sapiens Optimizado" },
      {
        property: "og:description",
        content: "La historia detrás de Sapiens Optimizado.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Redirect,
});

function Redirect() {
  useEffect(() => {
    window.location.replace("/site/index.html");
  }, []);
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0a0f0d",
        color: "#f2ede0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "system-ui",
      }}
    >
      Cargando El Mito…
    </div>
  );
}
