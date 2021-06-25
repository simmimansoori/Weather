const weatherApi = {
  key: "334b22e1b3520ba1dd2382d1e8fdef8f",
  baseurl: "https://api.openweathermap.org/data/2.5/weather",
};
// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}


const searchInputBox = document.getElementById("input-box");

searchInputBox.addEventListener("keypress", (event) => {
  if (event.keyCode == 13) {
    console.log(searchInputBox.value);
    getWeatherReport(searchInputBox.value);
  }
});

function getWeatherReport(city) {
  fetch(`${weatherApi.baseurl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then((weather) => {
      return weather.json();
    })
    .then(showWeatherReort);
}

function showWeatherReort(weather) {
  // console.log(weather);

  let city = document.getElementById("city");
  city.innerText = `${weather.name}, ${weather.sys.country}`;



  let temprature = document.getElementById("temp");
  temprature.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;

  let weatherType = document.getElementById("weather");
  weatherType.innerText = `${weather.weather[0].main}`;


  let date = document.getElementById("date");
  let todaydate = new Date();
  date.innerText = dateManage(todaydate);

  if (weatherType.textContent == 'Clouds') {
    let head = document.getElementById("head");
    head.style.backgroundImage = "url('icons/cloudy.png')";
  }
  else if (weatherType.textContent == 'Clear') {
    let head = document.getElementById("head");
    head.style.backgroundImage = "url('icons/clear.png')";
  }
  else if (weatherType.textContent == 'Rain') {
    let head = document.getElementById("head");
    head.style.backgroundImage = "url('icons/rainy.png')";
  }
  else if (weatherType.textContent == 'Stormy') {
    let head = document.getElementById("head");
    head.style.backgroundImage = "url('icons/storm.png')";
  }
  else if (weatherType.textContent == 'Wind') {
    let head = document.getElementById("head");
    head.style.backgroundImage = "url('icons/windy.png')";
  }
  else if (weatherType.textContent == 'Snow') {
    let head = document.getElementById("head");
    head.style.backgroundImage = "url('icons/snowy.png')";
  }

  else if (weatherType.textContent == 'Haze') {
    let head = document.getElementById("head");
    head.style.backgroundImage = "url('icons/cloudy.png')";
  }
  else if (weatherType.textContent == 'Drizzle') {
    let head = document.getElementById("head");
    head.style.backgroundImage = "url('icons/rainy.png')";
  }
  else {
    let head = document.getElementById("head");
    head.style.backgroundImage = "url('icons/sunny.png')";
  }


}

function dateManage(dateArg) {
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let year = dateArg.getFullYear();
  let month = months[dateArg.getMonth()];
  let date = dateArg.getDate();

  return `${date} ${month} ${year}`;
}

