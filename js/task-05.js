const inpt = document.querySelector("#name-input");
const textSpan = document.querySelector("#name-output");

function handleInp(event) {
    textSpan.textContent = event.currentTarget.value || "Anonymuos";
}
inpt.addEventListener("input", handleInp);