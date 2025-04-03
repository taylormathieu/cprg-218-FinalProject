fetch("https://api.openweathermap.org/data/2.5/weather?q=Cancun&appid=c5d238b4d5c5453bd05416ac54629475&units=metric")
.then(response => response.json())
.then(data => {
    console.log(data); 
    console.log(data.main.temp);
    temperature.textContent = "Temperature: " +data.main.temp + "°C"; 
    description.textContent = "Description: "+data.weather[0].description;
    humidity.textContent = "Humidity: "+data.main.humidity + "%"; 
    low.textContent = "Low Temperature: "+data.main.temp_min + "°C"; 
    high.textContent = "High Temperature: "+data.main.temp_max + "°C"; 
    feels.textContent = "Feels Like:" +data.main.feels_like + "°C";
//icon // 
const weathericon = "https://openweathermap.org/img/wn/"+data.weather[0].icon+".png"; 
console.log(weathericon);

icon.src = weathericon; 
icon.alt = data.weather[0].description; 

})