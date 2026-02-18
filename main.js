// Año automático (si existe el span)
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Menú móvil (a prueba de fallos)
const toggle = document.querySelector(".navToggle");
const nav = document.getElementById("navMenu");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  // Cerrar al tocar un link (mejor UX en móvil)
  nav.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });

  // Cerrar si tocas fuera del menú
  document.addEventListener("click", (e) => {
    const clickedInsideNav = nav.contains(e.target);
    const clickedToggle = toggle.contains(e.target);
    if (!clickedInsideNav && !clickedToggle) {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
}

// Header: cambia estilo al hacer scroll (si existe)
const header = document.querySelector("[data-elevate]");
window.addEventListener(
  "scroll",
  () => {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 10);
  },
  { passive: true }
);

// Animación reveal (si existen elementos)
const revealEls = document.querySelectorAll(".reveal");
if (revealEls.length) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("is-visible");
      });
    },
    { threshold: 0.12 }
  );

  revealEls.forEach((el) => io.observe(el));
}
