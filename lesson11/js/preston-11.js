/* Weather Summary Preston */

const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=e2c5cf2d76014478c0c017d1d040b23c";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    const weatherAPI = jsObject;
 
    document.getElementById('current').textContent = weatherAPI.weather[0].main;
    document.getElementById('temp').textContent = weatherAPI.main.temp_max.toFixed(1);
    document.getElementById('humidity').textContent = weatherAPI.main.humidity;
    document.getElementById('windSpeed').textContent = weatherAPI.wind.speed;   
  });

/* Event from Town Data */

const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); 

    const towns = jsonObject['towns'];

    for (let i = 0; i < towns.length; i++ ) {

        if (towns[i].name == "Preston"){       
			
			const town = towns[i];

			for (let x = 0; x < town.events.length; x++){

				const images = ["event1.jpg", "event2.jpg", "event3.jpg"]

				let div = document.createElement('div');
				let event = document.createElement('p');
				let image = document.createElement('img');

				div.appendChild(event);
				div.appendChild(image);

				event.textContent = town.events[x];
            	image.setAttribute('src', "assets/preston-" + images[x]);
				image.setAttribute('alt', town.events[x] + ", " + town.name + ", Idaho");
				
				document.querySelector('div.events').appendChild(div);
			}

        }
    }
  });