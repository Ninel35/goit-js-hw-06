const registerForm = document.querySelector(".login-form");

registerForm.addEventListener("submit", handleForm);

function handleForm(evt) {
    evt.preventDefault();

    const logData = {
        email: evt.currentTarget.elements.email.value,
        password: evt.currentTarget.elements.password.value,
    }
    if (logData.email === "" || logData.password === "") alert("All fields required");
    console.log(logData);
    evt.currentTarget.reset();
}
