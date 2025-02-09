const apiKey = "8871f076f041f94d087662e4d95ef4fc"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?"

async function checkWhether(city) {
    let response = await fetch(apiUrl + `q=${city}` + `&appid=${apiKey}` + '&units=metric')

    //console.log(data);
    if(response.status == 404){
        document.querySelector('.error').style.display = "block"
        document.querySelector('.bottom').style.display = "none"
    }
    else{
        var data = await response.json()
        document.querySelector('.error').style.display = "none"
        document.querySelector('.bottom').style.display = "block";
        document.querySelector('.water').innerHTML = data.main.humidity + "%"
        document.querySelector('.speed').innerHTML = data.wind.speed + " km/h"
        document.querySelector('#temp').innerHTML = Math.round(data.main.temp) + "°c"
        document.querySelector('#city').innerHTML = data.name
    }

}

let input = document.getElementById("search-city");

document.querySelector('#search-btn').addEventListener("click", ()=>{
    checkWhether(input.value);
})
