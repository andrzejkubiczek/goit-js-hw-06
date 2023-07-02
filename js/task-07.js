const inputSize = document.querySelector('#font-size-control');
const textSize = document.querySelector('#text');

inputSize.addEventListener('input', () => {
  textSize.style.fontSize = `${inputSize.value}px`;
});
