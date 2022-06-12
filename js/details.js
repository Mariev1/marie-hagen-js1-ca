const detailContainer = document.querySelector(".detailscontainer");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);

const url = "https://www.freetogame.com/api/game?id=1";
const proxy = "https://noroffcors.herokuapp.com/";

const corsFix = proxy + url;


async function getDetails() {

        try {
                const response = await fetch(corsFix);
                const details = await response.json();
        
                const gameDetails = details;

                detailContainer.innerHTML = "";
        
        
                detailContainer.innerHTML += `<img src="${gameDetails.thumbnail}" alt="${gameDetails.title}" />
                                              <h2>${gameDetails.title}</h2>
                                              <h3>Publisher: ${gameDetails.publisher}</h3>
                                              <h3>Developer: ${gameDetails.developer}</h3>
                                              <p>${gameDetails.description}</p>`   
        }
        catch(error) {
                console.log(error);
                detailContainer.innerHTML = "There seems to be an error"
            }
        

        
         
}

getDetails();

