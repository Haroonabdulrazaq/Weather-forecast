// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

let input = document.querySelector('.city-input')
let submitButton = document.querySelector('.submit-btn')
let searchText = document.querySelector('.search-text')
let tempResult = document.querySelector('.temp-result')
let pressureResult = document.querySelector('.pressure-result')
let humidityResult = document.querySelector('.humidity-result')
let precpitationResult = document.querySelector('.precipitation-result')
let windResult = document.querySelector('.wind-result')
let mainWeather = document.querySelector('.main-weather')


submitButton.addEventListener('click', (e)=>{
  let inputValue = input.value
  searchText.textContent = inputValue
    e.preventDefault();
    async function weatherInfo(){
      let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=f1626be87a0ae483be20b659210c16a3`)
      response = await response.json()
      mainWeather.textContent = `${response.weather[0].description}`
      tempResult.textContent = `${Math.floor((response.main.temp)-273)}C`;
      pressureResult.textContent = `${response["main"]["pressure"]}mm`
      humidityResult.textContent = `${response["main"]["humidity"]}%`
      precpitationResult.textContent = `${response.weather[0].main}`
      windResult.textContent = response["wind"]["speed"]
      return response
    }
    weatherInfo().catch(error =>{
      console.error(error)
    })
});
