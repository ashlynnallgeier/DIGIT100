window.addEventListener("DOMContentLoaded", init, false);

function init() {
  const form = document.getElementById("contactForm");
  const confirmation = document.getElementById("confirmationMessage");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputs = form.querySelectorAll("input, textarea");
    inputs.forEach((input) => input.classList.toggle("on"));
    confirmation.style.display = "block";
    form.reset();
  });
}
