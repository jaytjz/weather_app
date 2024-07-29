const weatherAPI = 'F92LRCNCWJPJ7WSCC5LP4HWCX';
let location = 'london';

async function getWeatherData(location) {
    const link = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${weatherAPI}`;

    try{
        const response = await fetch(link);
        const data = await response.json();
        console.log(data);
        return data;
    } catch(error) {
        console.error('Error fetching weather data:', error);
    }
}

function updateDisplay(city) {
    const content = document.getElementById("content");
    getWeatherData(city).then(data => {
        const address = data.address;
        const currentConditions = data.currentConditions;
        const humidity = currentConditions.humidity;
        const conditions = currentConditions.conditions;
        const temp = currentConditions.temp;
        const feelslike = currentConditions.feelslike;

        content.innerHTML = `
            <p>Temperature: ${temp} °F</p>
            <p>Humidity: ${humidity} %</p>
            <p>Feels like: ${feelslike} °F</p>
            <p>Conditions: ${conditions}</p>
            <p>City: ${address}</p>
        `
        console.log(temp);
        console.log(humidity); 
        console.log(feelslike);
        console.log(conditions);
        console.log(address);      
    })
}

document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();
    const city = document.getElementById("location").value;
    updateDisplay(city);
})