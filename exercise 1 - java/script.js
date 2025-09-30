// JavaScript Exercise 1
// This script greets the user based on their input.

function greetUser() {
  // Get the value typed into the input box
  let name = document.getElementById("nameInput").value;
  let output = document.getElementById("output");

  // Check if user entered something
  if (name.trim() === "") {
    output.innerHTML = "Please enter your name before clicking submit!";
  } else {
    output.innerHTML = "Hello, " + name + "! Welcome to my first JavaScript exercise.";
  }
}
