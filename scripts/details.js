const title = document.querySelector("title"); 
const infoBox = document.querySelector(".product-container");
const gameCrumb = document.querySelector("#gameCrumb");
const featuredGames = document.querySelector(".grid-wrap-featured");


const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const gameNamePath = params.get("game");
const detailsURL = "https://sanna.codes/wp-json/wc/store/products/" + gameNamePath


const createGame = async() => {
    try {
        const response = await fetch(detailsURL);
        const data = await response.json();
        infoBox.innerHTML = "";

        const gameID = data["id"];
        const gameName = data["name"];
        const gameImage = data["images"][0]["src"];
        const imageAlt = data["images"]["alt"];
        const gameDescription = data["short_description"];
        const gameGenre = data["type"];
        const gamePrice = data["prices"]["price"];
        const usedPrice = data["prices"]["sale_price"];
        const gameRating = data["average_rating"];
        const pathVariable = gameName.replaceAll(' ', '-').toLowerCase();

        infoBox.innerHTML = `
        <h1>${gameName}</h1>
        <div class="product-page-info">
            <div class="main-image">
                <img src="${gameImage}" alt="${imageAlt}" class="main-image">
            </div>
            <div class="product-page-info">
                <h2>${gamePrice}NOK</h2>
                <p>Used game from ${usedPrice}NOK</p>
                <a href="#" class="green-button" id="added-button">Add to cart</a>
            </div>
        </div>
        `;

        
        gameCrumb.innerHTML = `<a href="#">${gameName}</a>`;
        title.innerHTML = `${gameName}`;
        const addButton = document.querySelector("#added-button");
        addButton.addEventListener("click", addToCart);
    }

    catch (error) {
        console.log("Couldn't fetch" + error);
        infoBox.innerHTML += `<h2> Oops, something went wrong. Please try again later`;
    }
}

createGame();

function addToCart(){
    infoBox.innerHTML += ` <div id="added-notice"
    <p>Added to your cart!</p>
    
    <a href="cart.html" class="green-button">Click here to go to cart</a>
    </div>
    `
}

