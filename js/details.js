const detailContainer = document.querySelector(".detailscontainer");

const queryString = document.location.search;

const parameters = new URLSearchParams(queryString);

const id = parameters.get("id");

const url = "https://www.freetogame.com/api/game?id=1";
const proxy = "https://noroffcors.herokuapp.com/";

const corsFix = proxy + url;

const resultsContainer = document.querySelector(".results");

async function getDetails() {

        const response = await fetch(corsFix);
        const details = await response.json();

        const gameDetails = details;

        console.log(gameDetails);

        detailContainer.innerHTML += `<img src="${gameDetails.thumbnail}" alt="${gameDetails.title}" />
                                      <h2>${gameDetails.title}</h2>
                                      <h3>Publisher: ${gameDetails.publisher}</h3>
                                      <h3>Developer: ${gameDetails.developer}</h3>
                                      <p>${gameDetails.description}</p>` 
         
}

getDetails();

