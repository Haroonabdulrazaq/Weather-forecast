import weatherInfo from './weather';

const submitButton = document.querySelector('.submit-btn');

submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  weatherInfo();
});