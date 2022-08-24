import './style.css';
import getData from './modules/get.js';
import postData from './modules/post.js';
import validate from './modules/validate.js';

const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/24c0c3c116974ac49488d4eb0267bbc3/scores/';

const refreshBtn = document.querySelector('#refreshBtn');
refreshBtn.addEventListener('click', () => {
  getData(url);
});

const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const nameInput = document.querySelector('#name').value;
  const scoreInput = document.querySelector('#score').value;

  if (!nameInput || !scoreInput) {
    validate();
  }

  const data = {
    user: nameInput.trim(),
    score: scoreInput,
  };

  postData(url, data);
  form.reset();
});
