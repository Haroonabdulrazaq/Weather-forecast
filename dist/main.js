(()=>{"use strict";const t=(()=>{let t=document.querySelector(".bg-info");return{weatherInfo:async()=>{const e=document.querySelector(".pressure-result"),n=document.querySelector(".humidity-result"),o=document.querySelector(".precipitation-result"),r=document.querySelector(".wind-result"),a=document.querySelector(".time-result"),i=document.querySelector(".main-weather"),u=document.querySelector(".loader"),c=document.querySelector(".city-input"),s=document.querySelector(".search-text"),l=document.querySelector(".temp-result"),m=document.querySelector(".temp-unit");let d=0;const h=c.value,p=/[a-zA-Z]/;try{if(h.match(p)){u.classList.remove("hide");let c=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${h}&appid=f1626be87a0ae483be20b659210c16a3`);return c=await c.json(),u.classList.add("hide"),s.textContent=h.toUpperCase(),i.textContent=`${c.weather[0].description}`,d=Math.floor(c.main.temp-273),l.textContent=`${d}°C`,e.textContent=`${c.main.pressure}mm`,n.textContent=`${c.main.humidity}%`,o.textContent=`${c.weather[0].main}`,r.textContent=`${c.wind.speed}m/s`,a.textContent=c.timezone<0?"UTC"+c.timezone/3600:"UTC+"+c.timezone/3600,(async e=>{let n=await fetch(`https://api.giphy.com/v1/gifs/search?api_key=EaXnBGWSsM2gJBfbBOxFgQGkZOTjVoEp&limit=1&q=${e}`);n=await n.json(),t.style.backgroundImage=`url(${n.data[0].images.original.url})`})(c.weather[0].main),m.addEventListener("click",(t=>{t.preventDefault(),"Celsius"===m.textContent?(m.textContent="Fahrenheit",l.textContent=`${d}°C`):"Fahrenheit"===m.textContent?(m.textContent="Celsius",l.textContent=9*d/5+32+"F"):(m.textContent="Fahrenheit",l.textContent=`${d}°C`)})),c}s.textContent="Invalid Input"}catch(t){s.textContent="Location not found"}return{}}}})();document.querySelector(".submit-btn").addEventListener("click",(e=>{e.preventDefault(),t.weatherInfo()}))})();