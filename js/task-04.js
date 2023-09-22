const decrement = document.querySelector('button[data-action="decrement"]');
const increment = document.querySelector('button[data-action="increment"]');
const counter = document.querySelector("#value");

let counterValue = 0;

function handlerD() {
    counterValue -= 1;
    counter.textContent = counterValue;
}

decrement.addEventListener("click", handlerD);

function handlerI() {
    counterValue += 1;
    counter.textContent = counterValue;
}
increment.addEventListener("click", handlerI);
