// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

let input = document.querySelector('.city-input')
let submitButton = document.querySelector('.submit-btn')
// let url =  api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
submitButton.addEventListener('click', (e)=>{
  let inputValue = input.value
    e.preventDefault();
    // console.log(`Hello ${inputValue}`)
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=f1626be87a0ae483be20b659210c16a3`)
    .then(response =>{
      return response.json()
    })
    .then(response =>{
      console.log(response)
    })
});




