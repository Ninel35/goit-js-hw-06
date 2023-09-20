const categories = document.querySelectorAll('.item');
console.log("Number of categories: " + categories.length);
console.log("");

categories.forEach(
    li => {
        console.log("Category: " + li.querySelector("h2").textContent + "\n" + "Elements: " + li.querySelector("ul").querySelectorAll("li").length);
        console.log("");
}
)
