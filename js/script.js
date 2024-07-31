///////////////////////////////////////////////////////////
// Make mobile navigation work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    // Close mobile naviagtion
    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});

//////////////////////// INTERACTION

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Impede a submissão real do formulário

    // Mostra o toast
    var toastElement = document.getElementById("successToast");
    var toast = new bootstrap.Toast(toastElement);
    toast.show();

    this.reset();
  });
