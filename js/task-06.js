const input = document.querySelector("#validation-input");
input.addEventListener("blur", handleInpt);

function handleInpt(evt) {
    if (input.classList.contains("valid")) {input.classList.remove("valid")}
    else if (input.classList.contains("invalid")) {input.classList.remove("invalid")}

    if (evt.currentTarget.value.length === Number(input.dataset.length)) input.classList.add("valid");
    else input.classList.add("invalid");
}