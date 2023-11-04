document.addEventListener("DOMContentLoaded", function () {
    const registrationForm = document.getElementById("registration-form");
    const errorMessage = document.getElementById("error-message");

    registrationForm.addEventListener("submit", function (event) {
        event.preventDefault();
        console.log("run")

        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirm-password").value;

        if (password !== confirmPassword) {
            errorMessage.textContent = "Passwords do not match";
        } else {
            errorMessage.textContent = "";
            console.log(username)
            console.log(email)
            console.log(password)
        }
    });
});
