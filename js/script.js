const url = "https://www.freetogame.com/api/games";
const proxy = "https://noroffcors.herokuapp.com/";

const corsFix = proxy + url;

const resultsContainer = document.querySelector(".results");

async function getGames() {
    
    const response = await fetch(corsFix);

    results = await response.json();

    const games = results.all;

    resultsContainer.innerHTML = "";

    for (let i = 0; i < games.length; i++) {
        console.log(games[i].title);

        if (i === 10) {
            break;
        }

        resultsContainer.innerHTML += `<div class="result">${games[i].title}</div>`;
    }

    //resultsContainer.innerHTML += `<div class="results">${results}</div>`;

}

getGames();