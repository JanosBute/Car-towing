document.addEventListener("DOMContentLoaded", () => {
  // 1. Évszám frissítése a footerben
    document.getElementById("year").textContent = new Date().getFullYear();


  // 2. Képgaléria – modális képcserével
    document.querySelectorAll(".thumbnail").forEach((thumb) => {
      thumb.addEventListener("click", () => {
        document.getElementById("modalImage").src = thumb.dataset.img || thumb.src;
      });
    });

  // 3. Escape gombbal modális bezárása
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.getAttribute("aria-hidden") === "false") {
      modal.setAttribute("aria-hidden", "true");
      modal.blur();
    }
  });

  //Navbar görgetésre eltűnik
  var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-200px";
  }
  prevScrollpos = currentScrollPos;
}
});
