document.addEventListener("DOMContentLoaded", () => {
  // 1. Évszám frissítése a footerben
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // 2. Képgaléria – modális képcserével
  const modal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");

  document.querySelectorAll(".thumbnail").forEach((thumb) => {
    thumb.addEventListener("click", () => {
      modalImage.src = thumb.dataset.img || thumb.src;
      modal.setAttribute("aria-hidden", "false");
      modal.setAttribute("tabindex", "-1"); // fókuszolhatóvá tesszük
      modal.focus();
    });
  });

  // 3. Escape gombbal modális bezárása
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.getAttribute("aria-hidden") === "false") {
      modal.setAttribute("aria-hidden", "true");
      modal.blur();
    }
  });

  // 4. Navigáció – bootstrap collapse példány létrehozása
  const navbarCollapse = document.querySelector(".navbar-collapse");
  const toggler = document.querySelector(".navbar-toggler");

  if (navbarCollapse && toggler) {
    const bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: false });

    // a. Menü bezárása, ha linkre kattintanak
    document.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        if (navbarCollapse.classList.contains("show")) {
          bsCollapse.hide();
        }
      });
    });

    // b. Menü bezárása, ha hamburger ikonra újra kattintanak
    toggler.addEventListener("click", () => {
      if (toggler.getAttribute("aria-expanded") === "true") {
        bsCollapse.hide();
      }
    });

    // c. Enter vagy Space gombbal ikon aktiválása
    toggler.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggler.click();
      }
    });
  }
});
