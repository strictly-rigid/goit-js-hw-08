
import throttle from 'lodash.throttle';

const refs = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('input[name="email"]'),
    message: document.querySelector('textarea[name="message"]'),
    btnSubmit: document.querySelector('button'),
    }

const LOCALSTORAGE_KEY = "feedback-form-state";


const initialState = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)) || {};
refs.input.value = initialState.email || '';
refs.message.value = initialState.message || '';

refs.form.addEventListener('input', throttle(onFormInput, 500));

function onFormInput() {
  const currentStorage = {
    email: refs.input.value,
    message: refs.message.value,
  };
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(currentStorage));
}


refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault(); 
  
  const currentStorage = {
    email: refs.input.value,
    message: refs.message.value,
  };
  
  console.log(currentStorage); 
  
  localStorage.clear(); 
  refs.form.reset();
}
