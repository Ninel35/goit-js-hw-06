const inp = document.querySelector("#font-size-control");
const span = document.querySelector("#text");

inp.addEventListener("input", handleSpan);

function handleSpan(event) {
    span.style.fontSize = event.currentTarget.value +"px";
}