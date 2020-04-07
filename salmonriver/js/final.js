/* Hamburger Menu */

const hambutton = document.getElementsByClassName('hamburger')[0];
hambutton.addEventListener("click", toggleMenu, false);

function toggleMenu() {
	document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
};





const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=4092267&units=imperial&APPID=e2c5cf2d76014478c0c017d1d040b23c";
fetch(apiURL)
.then(function (response) {
    return response.json();
  })
  
  //.then((response) => response.json())
  //.then((jsObject) => {
	.then(function (jsonObject) {
    console.log(jsObject);

    const weatherAPI = jsObject;
 
    document.getElementById('current').textContent = weatherAPI.weather[0].main;
    document.getElementById('temp').textContent = weatherAPI.main.temp_max.toFixed(1);
    document.getElementById('humidity').textContent = weatherAPI.main.humidity;
    document.getElementById('windSpeed').textContent = weatherAPI.wind.speed;   
  });



let t = document.getElementById('temp').innerHTML;
let s = document.getElementById('windSpeed').innerHTML;

if ((t <= 50) && (s >= 3)) {

let f = (35.74+0.6215*t) - (35.75*Math.pow(s,0.16)) +0.4275*t*(Math.pow(s,0.16));
 

document.getElementById('windChill').innerHTML = Math.round(f);
}

else {
document.getElementById('windChill').innerHTML = 'N/A';
};

/* River Guide Json */

const requestURL = 'https://aliciaschreiner.github.io/salmonriver/js/riverguides.json';
 
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  
  .then(function (jsonObject) {
    
	const riverguides = jsonObject['riverguides']; 

    for (let i = 0; i < riverguides.length; i++ ) {
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let certification = document.createElement('p');
	let experience = document.createElement('p');
	let email = document.createElement('p');
	let bio = document.createElement('p');
    let image = document.createElement('img');



h2.textContent = riverguides[i].name + ' ' + riverguides[i].lastname;
certification.textContent = "Certification Level: " + riverguides[i].certification;
experience.textContent = "Years of Experience: " + riverguides[i].experience;
email.textContent = "Email: " + riverguides[i].email;
bio.textContent = "Bio: " + riverguides[i].bio;
image.setAttribute('src', riverguides[i].imageurl);
image.setAttribute('alt', riverguides[i].name + ' ' + riverguides[i].lastname + '-' + [i]);


card.appendChild(h2);
card.appendChild(certification);
card.appendChild(experience);
card.appendChild(email);
card.appendChild(bio);
card.appendChild(image);

document.querySelector('div.cards').appendChild(card); 
	}
});