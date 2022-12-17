const title = document.querySelector("title"); 
const addButton = document.querySelector("#added-button");
const infoBox = document.querySelector(".product-page-info");


// function createGame(id){
//     getGames().forEach(game => {
//         gameDetails.innerHTML = `
//         <h1>${game[id].name}</h1>
//         `
//     })
// }

// createGame(1);


function addToCart(){
    infoBox.innerHTML = `
    <p>Added to your cart!</p>
    
    <a href="cart.html" class="green-button">Click here to go to cart</a>
    `
}

addButton.addEventListener("click", addToCart);

