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

/* Events from Town Data */

const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
 
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  
  .then(function (jsonObject) {      
    const towns = jsonObject['towns'];
   for (let i = 0; i < towns.length; i++ ) {
       if ( towns[i].name =="Preston" ) {
    let section = document.createElement('section');
    let h4 = document.createElement('h4');
    let x;
    for (let x=0; x < towns[i].events.length; x++) {
      h4.innerHTML += towns[i].events[x] + "<br>" ;
      section.appendChild(h4);
      


    }
 

   

document.querySelector('div.events').appendChild(section);
}
}
});