// Fill in your details here. Empty values hide their buttons, so there are never dead links.
const me = {
  email: "olukogbonseyi@gmail.com",      // e.g. "you@gmail.com"
  whatsapp: "2349115611503",   // digits only with country code, e.g. "2348012345678"
  github: "olukogbonseyi",     // your GitHub username
  links: { fintech: "https://www.figma.com/design/nhdKMHMG5PgE1Famx14RHv/SEYIS-IT-JOURNEY?node-id=0-1&t=oRBZmRcHZdIoQAb7-1", brewBean: "https://www.figma.com/design/nhdKMHMG5PgE1Famx14RHv/SEYIS-IT-JOURNEY?node-id=0-1&t=oRBZmRcHZdIoQAb7-1" } // Figma prototype / live site URLs
};
const msg = encodeURIComponent("Hi Oluseyi, I saw your portfolio and I'd like to talk.");
const href = {
  email: me.email && `mailto:${me.email}?subject=Hello%20Oluseyi`,
  whatsapp: me.whatsapp && `https://wa.me/${me.whatsapp}?text=${msg}`,
  github: me.github && `https://github.com/${me.github}`,
  fintech: me.links.fintech, brewBean: me.links.brewBean
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
