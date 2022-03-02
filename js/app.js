const loadbtn = () => {
    const API_KEY = `76f051728621b4bb314ee80360ea5023`;
    const cityName = document.getElementById('input-field').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(res => res.json())
        .then(data => showData(data))
}

const innerText = (id, text) => {
    document.getElementById(id).innerText = text;
}

const showData = temperature => {
    console.log(temperature);
    innerText('city-name', temperature.name);
    innerText('temperature', temperature.main.temp);
    innerText('status', temperature.weather[0].main);
    // set icon
    const url = `https://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const imageIcon = document.getElementById('weather-icon');
    imageIcon.setAttribute('src', url);
}