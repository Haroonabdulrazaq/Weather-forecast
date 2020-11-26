// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

let input = document.querySelector('.city-input')
let submitButton = document.querySelector('.submit-btn')
let searchText = document.querySelector('.search-text')
let tempResult = document.querySelector('.temp-result')
let pressureResult = document.querySelector('.pressure-result')
let humidityResult = document.querySelector('.humidity-result')
let precpitationResult = document.querySelector('.precipitation-result')
let windResult = document.querySelector('.wind-result')


submitButton.addEventListener('click', (e)=>{
  let inputValue = input.value
  searchText.textContent = inputValue
    e.preventDefault();
    async function weatherInfo(){
      let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=f1626be87a0ae483be20b659210c16a3`)
      response = await response.json()
      tempResult.textContent = `${response["main"]["temp"]- 273} C`
      pressureResult.textContent = `${response["main"]["pressure"]}mm`
      humidityResult.textContent = `${response["main"]["humidity"]}%`
      precpitationResult.textContent = `${response.weather[0].main}`
      windResult.textContent = response["wind"]["speed"]
    }
    weatherInfo().catch(error =>{
      console.error(error)
    })
});


// async function weatherReport() {
//   let result = {}
//   result =  await weatherInfo()
//   console.log(result)
// }


// fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=f1626be87a0ae483be20b659210c16a3`)
// .then(response =>{
//   return response.json()
// })
// .then(response =>{
//   console.log(response)
// })

//      console.log(response["main"]["temp"])