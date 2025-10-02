window.addEventListener('DOMContentLoaded', init, false);

function init() {
    const form = document.getElementById("contactForm");
    const confirmation = document.getElementById("confirmationMessage");

    form.addEventListener("submit", function(e) {
        e.preventDefault(); // prevent page reload

        // Simple interactive effect: highlight input fields
        const inputs = form.querySelectorAll("input, textarea");
        inputs.forEach(input => input.classList.toggle("on"));

        // Show confirmation message
        confirmation.style.display = "block";

        // Optionally, reset form
        form.reset();
    });
}
