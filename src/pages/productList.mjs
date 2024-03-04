import apiClient from "../api/apiClient.mjs";

console.log("Hei");

const gameList = document.querySelector(".gameList");

const productList = async () => {
    const games = await apiClient.getAllGames();
    console.log(games); 

    gameList.innerHTML = "";

    games.forEach(game => {
        const gameItem = document.createElement("div");
        gameItem.classList.add("gameItem");
        gameItem.innerHTML = `
            <div>
                <img src="${game.image}" alt="${game.title}">
            </div>
            <div>
                <h2>${game.title}</h2>
                <p>${game.price} kr</p>
                <p>${game.description}</p>
            </div>
            <div class="buttons-group">
                <a href="productpage.html?game=${game.id}" class="button">View</a>
                <a href="productpage.html?game=${game.id}" class="button">Add to cart</a>
            </div>
        `;
        gameList.appendChild(gameItem);
    });
}

productList();