// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!
const colors = document.querySelectorAll(".color");
const current = document.querySelector("#current-color");
const cells = document.querySelectorAll(".cell");

colors.forEach((color) => {
  color.addEventListener("click", () => {

    let selectedColor = color.style.backgroundColor;
    current.style.backgroundColor = selectedColor;
  })
})

cells.forEach((cell)=>{
  cell.addEventListener("mousedown", () => {
  cell.style.backgroundColor = current.style.backgroundColor;
  })
})






