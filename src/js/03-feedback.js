import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');


const savedState = throttle(() => {
  const email = form.email.value;
  const message = form.message.value;
    const state = { email, message };
    
  localStorage.setItem('feedback-form-state', JSON.stringify(state));
}, 500);

const initialState = localStorage.getItem('feedback-form-state');

if (initialState) {
  const { email, message } = JSON.parse(initialState);
  form.email.value = email;
  form.message.value = message;
};

form.addEventListener('input', savedState);
form.addEventListener('submit', evt => {
    evt.preventDefault();
    
  const email = form.email.value;
  const message = form.message.value;
  const state = { email, message };
  
  localStorage.removeItem('feedback-form-state');
  form.email.value = '';
  form.message.value = '';
  console.log(state);
});  
