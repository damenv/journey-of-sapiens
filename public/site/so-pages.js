document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".so-nav");
  const burger = document.querySelector(".so-nav__burger");
  const links = document.querySelector(".so-nav__links");

  if (nav) {
    const onScroll = () => nav.classList.toggle("so-nav--solid", window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  if (burger && links) {
    burger.addEventListener("click", () => {
      const open = links.classList.toggle("is-open");
      burger.setAttribute("aria-expanded", String(open));
    });
    links.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        links.classList.remove("is-open");
        burger.setAttribute("aria-expanded", "false");
      }),
    );
  }

  document.querySelectorAll(".so-form").forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = form.querySelector("input[type=email]");
      if (!email || !email.value) return;
      const button = form.querySelector("button");
      if (button) button.textContent = "¡Listo! ✦";
    });
  });

  const chips = document.querySelectorAll(".so-chip");
  const cards = document.querySelectorAll("[data-filter]");
  if (chips.length && cards.length) {
    chips.forEach((chip) => {
      chip.addEventListener("click", () => {
        chips.forEach((c) => c.classList.remove("is-active"));
        chip.classList.add("is-active");
        const filter = chip.dataset.filterValue;
        cards.forEach((card) => {
          const show = filter === "Todos" || card.dataset.filter === filter;
          card.style.display = show ? "" : "none";
        });
      });
    });
  }

  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
});
