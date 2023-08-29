async function weatherApi() {
    try {
        const response = await fetch('https://api.openweathermap.org/data/2.5/forecast?q=Bangalore&APPID=c4cb7f4cd38c91fffeff8c440006ca1d');
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}
let weatherData = null;
const main = document.getElementById('main-weather');
const pressure_list = document.getElementById('pressure');
const wind = document.getElementById('wind');
const humidity = document.getElementById('humidity');

    (async function fetchData() {
        try {
            weatherData = await weatherApi();
            main.textContent = `${weatherData.list[0].main.temp} K`
            pressure_list.textContent = `${weatherData.list[0].main.pressure} Pressure`
            wind.textContent = `${weatherData.list[0].wind.speed} Wind`
            humidity.textContent = `${weatherData.list[0].main.humidity} Humidity`
        } catch (error) {
            console.log(error)
        }
    }())
