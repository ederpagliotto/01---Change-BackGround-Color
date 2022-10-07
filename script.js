const changeColorButton = document.querySelector(".btn");
const page = document.querySelector("body");
const colors = ["green", "blue", "yellow", "black", "white", "brown", "pink", "red", "orange", "gray", "purple", "violet"];

page.style.backgroundColor = "green";
changeColorButton.addEventListener("click", changeColor);


function changeColor() {
    const colorIndex = parseInt(Math.random() * colors.length);
    page.style.backgroundColor = colors[colorIndex];
}