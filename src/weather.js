export default async function weatherInfo(){

  let pressureResult = document.querySelector('.pressure-result')
  let humidityResult = document.querySelector('.humidity-result')
  let precpitationResult = document.querySelector('.precipitation-result')
  let windResult = document.querySelector('.wind-result')
  let timeResult = document.querySelector('.time-result')
  let mainWeather = document.querySelector('.main-weather')
  let loader = document.querySelector('.loader')
  let input = document.querySelector('.city-input')
  let searchText = document.querySelector('.search-text')
  let tempResult = document.querySelector('.temp-result')
  let temp = 0
  let inputValue = input.value
  
    let regexp = /[a-zA-Z]/
try {

  if(inputValue.match(regexp)){
    loader.classList.remove('hide')

    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=f1626be87a0ae483be20b659210c16a3`)
    response = await response.json()

    loader.classList.add('hide')

    searchText.textContent = inputValue.toUpperCase()
    mainWeather.textContent = `${response.weather[0].description}`
    temp = Math.floor((response.main.temp)-273)
    tempResult.textContent = `${temp}°C`;
    pressureResult.textContent = `${response["main"]["pressure"]}mm`
    humidityResult.textContent = `${response["main"]["humidity"]}%`
    precpitationResult.textContent = `${response.weather[0].main}`
    windResult.textContent = `${response["wind"]["speed"]}m/s`
    timeResult.textContent = response["timezone"] < 0 ? `UTC${response["timezone"]/3600}` : `UTC+${response["timezone"]/3600}`
    return response
  }else{
    searchText.textContent = "Invalid Input"
  }
}catch(error) {
  searchText.textContent = "City not found"
  console.error(error)
}

tempUnit.addEventListener('click',(e)=> {
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
}


