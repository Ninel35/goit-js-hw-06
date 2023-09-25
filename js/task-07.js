const inp = document.querySelector("#font-size-control");
const span = document.querySelector("#text");

inp.addEventListener("input", handleSpan);
span.style.fontSize = inp.value+"px";
function handleSpan(event) {
    span.style.fontSize = event.currentTarget.value +"px";
}