document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevents form submission

    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();
    let errorMessage = document.getElementById("errorMessage");

    // Reset error message
    errorMessage.textContent = "haha you got it";

    // If both username and password are "admin"
    if (username === "admin" && password === "admin") {
      alert("You sussy baka 🧐!");
      return;
    }

    // Show incorrect message if credentials are wrong
    errorMessage.textContent = "Username or ID incorrect!";
  });
