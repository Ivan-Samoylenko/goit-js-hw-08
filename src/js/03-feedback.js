import throttle from 'lodash.throttle';
// const throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');
const email = form.querySelector('[name="email"]');
const message = form.querySelector('[name="message"]');
const LOCAL_KEY = 'feedback-form-state';
const options = { email: '', message: '' };

if (localStorage.getItem(LOCAL_KEY)) {
  try {
    const { email, message } = JSON.parse(localStorage.getItem(LOCAL_KEY));
    options.email = email;
    options.message = message;
  } catch (err) {
    console.log(err);
  }
}

email.value = options.email;
message.value = options.message;

form.addEventListener('input', throttle(onInput, 200));
form.addEventListener('submit', onSubmit);

function onInput(evt) {
  options[evt.target.name] = evt.target.value;
  localStorage.setItem(LOCAL_KEY, JSON.stringify(options));
}
function onSubmit(evt) {
  evt.preventDefault();
  evt.currentTarget.reset();
  localStorage.removeItem(LOCAL_KEY);
}
