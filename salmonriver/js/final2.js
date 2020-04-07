/* Hamburger Menu */

const hambutton = document.getElementsByClassName('hamburger')[0];
hambutton.addEventListener("click", toggleMenu, false);

function toggleMenu() {
	document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
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
