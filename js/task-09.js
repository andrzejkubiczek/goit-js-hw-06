function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeButton = document.querySelector('.change-color');
const bodyElement = document.body;
const colorValue = document.querySelector('.color');

changeButton.addEventListener('click', () => {
  const randomColor = getRandomHexColor();
  bodyElement.style.backgroundColor = randomColor;
  colorValue.textContent = randomColor;
});
