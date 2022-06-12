const resultsContainer = document.querySelector(".results");

const url = "https://www.freetogame.com/api/games";
const proxy = "https://noroffcors.herokuapp.com/";

const corsFix = proxy + url;

async function getGames() {

    try {
        const response = await fetch(corsFix);

        results = await response.json();
    
        const games = results;
    
        resultsContainer.innerHTML = "";
    
        for (let i = 0; i < games.length; i++) {
    
            if (i === 20) {
                break;
            }
    
            resultsContainer.innerHTML += `<a href="details.html?id${games[i].id}" class="card">
                                           <img src="${games[i].thumbnail}" alt="${games[i].title}" />
                                           <h2>${games[i].title}</h2>
                                           <p>${games[i].platform}</p>
                                           <p>${games[i].short_description}</p>
                                           </a>`;
        }
    }
    catch(error) {
        console.log(error);
        resultsContainer.innerHTML = "There seems to be an error"
    }

}

getGames();