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

  const apiForecastURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=e2c5cf2d76014478c0c017d1d040b23c";
fetch(apiForecastURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    const dayOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

	for (let i = 0; i < jsObject.list.length; i++ ){
		if (new Date(jsObject.list[i].dt_txt).getHours() == 18) {

			var forecastAPI = jsObject.list[i];
			
			let div1 = document.createElement('div');
			let div2 = document.createElement('div');
			let head = document.createElement('strong');
			let div3 = document.createElement('div');
			let image = document.createElement('img');
			let temp = document.createElement('p');

			const imageidentifier = forecastAPI.weather[0].main;
			if (imageidentifier == "Clear"){
				var imgSource = "images/wi-day-sunny.svg";
			} 
			else if (imageidentifier == "Clouds"){
				var imgSource = "images/wi-cloudy.svg";
			}
			else if (imageidentifier == "Rain"){
				var imgSource = "images/wi-day-rain.svg";
            }
            else {
				var imgSource = "images/wi-day-rain.svg";
			}


			head.textContent = dayOfWeek[new Date(forecastAPI.dt_txt).getDay()];
			image.setAttribute('src', imgSource);
			image.setAttribute('alt', forecastAPI.weather[0].description);
			temp.innerHTML = forecastAPI.main.temp.toFixed(1) + " &#8457;";

			div1.appendChild(div2);
			div2.classList.add("day");
			div2.appendChild(head);
			div3.classList.add("dayweather");
			div1.appendChild(div3);
			div3.appendChild(image);
			div3.appendChild(temp);

			document.querySelector('div.forecastcontainer').appendChild(div1);

		}
	}
  });
