let input = document.querySelector('.city-input')
let submitButton = document.querySelector('.submit-btn')
let searchText = document.querySelector('.search-text')
let tempResult = document.querySelector('.temp-result')
let pressureResult = document.querySelector('.pressure-result')
let humidityResult = document.querySelector('.humidity-result')
let precpitationResult = document.querySelector('.precipitation-result')
let windResult = document.querySelector('.wind-result')
let timeResult = document.querySelector('.time-result')
let mainWeather = document.querySelector('.main-weather')
let loader = document.querySelector('.loader')

let tempUnit = document.querySelector('.temp-unit')
let temp = 0


submitButton.addEventListener('click', (e)=>{
  loader.classList.remove('hide')
  e.preventDefault();
  async function weatherInfo(){
    let inputValue = input.value
    searchText.textContent = inputValue.toUpperCase()

    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=f1626be87a0ae483be20b659210c16a3`)
    response = await response.json()
    loader.classList.add('hide')
    mainWeather.textContent = `${response.weather[0].description}`
    temp = Math.floor((response.main.temp)-273)
    tempResult.textContent = `${temp}°C`;
    pressureResult.textContent = `${response["main"]["pressure"]}mm`
    humidityResult.textContent = `${response["main"]["humidity"]}%`
    precpitationResult.textContent = `${response.weather[0].main}`
    windResult.textContent = `${response["wind"]["speed"]}m/s`
    timeResult.textContent = response["timezone"] < 0 ? `UTC${response["timezone"]/3600}` : `UTC+${response["timezone"]/3600}`
    return response
  }
  weatherInfo().catch(error =>{
    console.error(error)
  })
});

const convertToFahrenheit =(fahrenheit)=>{
  return fahrenheit = (temperature * 9/5) + 32;
 }

//Function converting Celsisus to Fahrenheit
const convertToCelsius = (celsius)=>{
  return celsius = (convertToFahrenheit() - 32) * 5/9;
}

  tempUnit.addEventListener('click',(e)=>{
    e.preventDefault();
      if (tempUnit.textContent == 'Celsius'){
        tempUnit.textContent = 'Fahrenheit'
        tempResult.textContent= `${temp}°C`
      }
      else if (tempUnit.textContent == 'Fahrenheit'){
        tempUnit.textContent = 'Celsius'
        tempResult.textContent = `${(temp * 9/5) + 32}F`
      }
      else{
        tempUnit.textContent = 'Fahrenheit'
        tempResult.textContent= `${temp}°C`
      }
  })
