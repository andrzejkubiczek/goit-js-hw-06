const textInput = document.querySelector('#validation-input');

textInput.addEventListener('blur', () => {
  const textLength = textInput.value.length === parseInt(textInput.getAttribute('data-length'));
  textInput.classList.toggle('valid', textLength);
  textInput.classList.toggle('invalid', !textLength);
});
