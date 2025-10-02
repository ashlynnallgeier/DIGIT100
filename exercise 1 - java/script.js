window.addEventListener('DOMContentLoaded', init, false);

function init() {
    alert("Hi there! The page has loaded!");

    var button = document.getElementById("colorBtn");
    button.addEventListener('click', randomColor, false);
}

function randomColor() {
    var text = document.getElementById("colorToggle");
    var colors = ["red", "blue", "green", "purple", "orange", "pink", "brown"];
    var randomPick = colors[Math.floor(Math.random() * colors.length)];
    text.style.color = randomPick;
}
