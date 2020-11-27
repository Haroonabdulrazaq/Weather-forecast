const weatherModule = (() => {
  const Converter = (tempText, tempR, tempValue) => {
    tempText.addEventListener('click', (e) => {
      e.preventDefault();
      if (tempText.textContent === 'Celsius') {
        tempText.textContent = 'Fahrenheit';
        tempR.textContent = `${tempValue}°C`;
      } else if (tempText.textContent === 'Fahrenheit') {
        tempText.textContent = 'Celsius';
        tempR.textContent = `${((tempValue * 9) / 5) + 32}F`;
      } else {
        tempText.textContent = 'Fahrenheit';
        tempR.textContent = `${tempValue}°C`;
      }
    });
  };

  const weatherInfo = async () => {
    const pressureResult = document.querySelector('.pressure-result');
    const humidityResult = document.querySelector('.humidity-result');
    const precpitationResult = document.querySelector('.precipitation-result');
    const windResult = document.querySelector('.wind-result');
    const timeResult = document.querySelector('.time-result');
    const mainWeather = document.querySelector('.main-weather');
    const loader = document.querySelector('.loader');
    const input = document.querySelector('.city-input');
    const searchText = document.querySelector('.search-text');
    const tempResult = document.querySelector('.temp-result');
    const tempUnit = document.querySelector('.temp-unit');
    let temp = 0;
    const inputValue = input.value;

    const regexp = /[a-zA-Z]/;
    try {
      if (inputValue.match(regexp)) {
        loader.classList.remove('hide');

        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=f1626be87a0ae483be20b659210c16a3`);
        response = await response.json();

        loader.classList.add('hide');

        searchText.textContent = inputValue.toUpperCase();
        mainWeather.textContent = `${response.weather[0].description}`;
        temp = Math.floor((response.main.temp) - 273);
        tempResult.textContent = `${temp}°C`;
        pressureResult.textContent = `${response.main.pressure}mm`;
        humidityResult.textContent = `${response.main.humidity}%`;
        precpitationResult.textContent = `${response.weather[0].main}`;
        windResult.textContent = `${response.wind.speed}m/s`;
        timeResult.textContent = response.timezone < 0 ? `UTC${response.timezone / 3600}` : `UTC+${response.timezone / 3600}`;

        Converter(tempUnit, tempResult, temp);
        return response;
      }
      searchText.textContent = 'Invalid Input';
    } catch (error) {
      searchText.textContent = 'Location not found';
    }
    return {};
  };

  return { weatherInfo };
})();

export default weatherModule;