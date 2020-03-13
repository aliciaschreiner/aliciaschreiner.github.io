const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        const towns = jsonObject['towns'];
        for (let i = 0; i < towns.length; i++) {
            if (towns[i].name == "Franklin" || towns[i].name == "Preston" || towns[i].name == "Soda Springs") {
                let card = document.createElement('section');
                let col1 = document.createElement('div');
                let col2 = document.createElement('div');
                let h2 = document.createElement('h2');
                h2.textContent = towns[i].name;
                let motto = document.createElement('h3');
                motto.textContent = towns[i].motto;
                let yearFounded = document.createElement('p');
                let currentPopulation = document.createElement('p');
                let averageRainfall = document.createElement('p');

                yearFounded.textContent = "Year founded: " + towns[i].yearFounded;
                currentPopulation.textContent = "Population: " + towns[i].currentPopulation;
                averageRainfall.textContent = "Annual rainfall: " + towns[i].averageRainfall;
                let img = document.createElement('img');
                img.setAttribute('src', 'images/' + towns[i].photo);
                img.setAttribute('alt', towns[i].name + '-' + 'town');
                motto.setAttribute("class", "motto");
                card.setAttribute("class", "card");
                col1.setAttribute("class", "col1");
                col2.setAttribute("class", "col2");
                col1.appendChild(h2);
                col1.appendChild(motto);
                col1.appendChild(yearFounded);
                col1.appendChild(currentPopulation);
                col1.appendChild(averageRainfall);
                col2.appendChild(img);
                card.appendChild(col1);
                card.appendChild(col2);
                document.querySelector('div.cards').appendChild(card);
            }
        }

        console.table(jsonObject); // temporary checking for valid response and data parsing
    });