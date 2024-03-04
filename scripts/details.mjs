import apiClient from "../src/api/apiClient.mjs";

const title = document.querySelector("title"); 
const gameContainer = document.querySelector(".product-container");


const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const gameId = params.get("game");
console.log(gameId);



const createGame = async() => {
    try {
        const game = await apiClient.getGameById(gameId);
        console.log(game); 
        title.innerHTML = game.title;

        if (game.onSale) {
            let onSaleText = `
            <div class="priceBox">
                <h3 class="onSalePrice">$${game.price}</h3>
                <h2>On sale! $${game.discountedPrice}</h2>
                <div class="button">Add to cart</div>
            `; 
        } else {
            const onSaleText = `
            <div class="priceBox">
                <h2>$${game.price}</h2>
                <div class="button">Add to cart</div>
            `;
        }

        gameContainer.innerHTML = `
        <div class="gameContainer"> 
            <div class="detailGame">
                <h1>${game.title}</h1>
                <img src="${game.image}" alt="${game.title}">
                <p>${game.description}</p>
                <ul>
                    <li>Genre: ${game.genre}</li>
                    <li>Release date: ${game.released}</li>
                    <li>Age rating: ${game.ageRating}</li>
                </ul>
            </div>
            <div class="priceBox">
            </div>
        </div>
        `;



    } catch (error) {
        console.log(error); 
    }
}

createGame();

// function addToCart(){
//     infoBox.innerHTML += ` <div id="added-notice"
//     <p>Added to your cart!</p>
    
//     <a href="cart.html" class="green-button">Click here to go to cart</a>
//     </div>
//     `
// }

