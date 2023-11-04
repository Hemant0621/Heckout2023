document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const errorMessage = document.getElementById("error-message");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // You can add your login validation logic here
        if (email === "admin@gmail.com" && password === "admin") {
            errorMessage.textContent = "";
            window.location.href="/dashboard.html"
            // Redirect to the user's dashboard or perform login logic
        } else {
            errorMessage.textContent = "Invalid email or password";
        }
    });
});