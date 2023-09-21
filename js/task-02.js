const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector("#ingredients");

const itemsList = ingredients.map(
  value => {
    const li = document.createElement("li");
    li.textContent = value;
    li.classList.add("item");
    return li;
  }
)
list.append(...itemsList);
