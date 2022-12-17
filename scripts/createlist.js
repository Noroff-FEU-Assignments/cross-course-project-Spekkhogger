getGames().forEach(game => {
    listOfGames.innerHTML += `
    <div class="list-game-wrap">
        <div class="list-game-image">
            <img src="${game.image}" alt="Game cover" class="video-game-product">
        </div>
        <div class="list-game-info">
            <h2>${game.name}</h2>
            <h5>Playbox</h5>
            <div class="list-game-price">
                <h3>$ ${game.price}</h3>
                <a href="productpage.html" class="green-button">View game</a>
            </div>
        </div>
    </div>`
});