const form = document.querySelector('.login-form');

form.addEventListener('submit', event => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value && password.value) {
    const userValues = {
      email: email.value,
      password: password.value,
    };

    console.log(userValues);
    event.currentTarget.reset();
  } else {
    alert('Please complete all the fields!');
  }
});
