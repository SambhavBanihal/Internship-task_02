const inputbox = document.querySelector('.inputbox');
const searchbtn = document.getElementById('searchbtn');
const weather_img = document.querySelector('.weatherimg');
const temperature = document.querySelector('.temperature');
const humidity = document.getElementById('humidity');
const description = document.querySelector('.desc');
const wind_speed = document.getElementById('windspeed');

const locationnotfound=document.querySelector('.locationnotfound');
const weatherbody= document.querySelector('.weatherbody');
async function checkweather(city) {
    const apikey = "d3ef58d5a0c99613a027f8421f1eef33";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
    const weather_data = await fetch(`${url}`).then(response => response.json());
    console.log(weather_data);
    if(weather_data.cod==='404'){
        locationnotfound.style.display="flex";
        weatherbody.style.display="none";
        console.log("error");
        return;
    }
    weatherbody.style.display="flex";
    locationnotfound.style.display="none";
    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`;
    console.log(weather_data);
    humidity.innerHTML = `${weather_data.main.humidity}%`;
    wind_speed.innerHTML = `${weather_data.wind.speed}Km/Hr`;
    switch (weather_data.weather[0].main) {
        case 'Clouds':
            weather_img.src = "cloud.png";
            break;
        case 'Clear':
            weather_img.src = "clear.png";
            break;
        case 'Rain':
            weather_img.src = "rain.png";
            break;
        case 'Mist':
            weather_img.src = "mist.png";
            break;
        case 'Snow':
            weather_img.src = "snow.png";
            break;
    }
}

searchbtn.addEventListener('click', () => {
    checkweather(inputbox.value);
});
