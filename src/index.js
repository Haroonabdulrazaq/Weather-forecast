import weatherInfo from './weather'
let submitButton = document.querySelector('.submit-btn')

let tempUnit = document.querySelector('.temp-unit')


submitButton.addEventListener('click', (e)=>{
  e.preventDefault();
  weatherInfo()
});