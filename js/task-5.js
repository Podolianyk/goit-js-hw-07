function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

const changeColorButton = document.querySelector(".change-color");
const colorValueSpan = document.querySelector(".color");

changeColorButton.addEventListener("click", changeBackgroundColor);

function changeBackgroundColor() {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  colorValueSpan.textContent = randomColor;
}
