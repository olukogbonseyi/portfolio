// contact details and links. leave one empty and its button hides
const me = {
  email: "olukogbonseyi@gmail.com",
  whatsapp: "2349115611503",
  github: "olukogbonseyi",
  links: { fintech: "https://www.figma.com/design/nhdKMHMG5PgE1Famx14RHv/SEYIS-IT-JOURNEY?node-id=0-1&t=oRBZmRcHZdIoQAb7-1", brewBean: "https://www.figma.com/design/nhdKMHMG5PgE1Famx14RHv/SEYIS-IT-JOURNEY?node-id=0-1&t=oRBZmRcHZdIoQAb7-1",
    sante: "https://github.com/olukogbonseyi/sante-lims" }
};
const msg = encodeURIComponent("Hi Oluseyi, I saw your portfolio and I'd like to talk.");
const href = {
  email: me.email && `mailto:${me.email}?subject=Hello%20Oluseyi`,
  whatsapp: me.whatsapp && `https://wa.me/${me.whatsapp}?text=${msg}`,
  github: me.github && `https://github.com/${me.github}`,
  fintech: me.links.fintech, brewBean: me.links.brewBean,
  sante: me.links.sante
};
document.querySelectorAll("[data-link]").forEach(el => {
  const url = href[el.dataset.link];
  if (url) { el.href = url; if (!url.startsWith("mailto")) el.target = "_blank"; el.rel = "noopener"; }
  else el.hidden = true;
});
// Mobile menu
const menu = document.querySelector(".menu"), nav = document.querySelector("nav");
menu.addEventListener("click", () => menu.setAttribute("aria-expanded", nav.classList.toggle("open")));
nav.addEventListener("click", () => { nav.classList.remove("open"); menu.setAttribute("aria-expanded", "false"); });
document.querySelector("#year").textContent = new Date().getFullYear();
