const listOfGames = document.querySelector(".game-details")

class Game {
    constructor(name, image, genre, price, rating, pathVariable) {
    this.name = name; 
    this.image = image;
    this.genre = genre;
    this.price = price;
    this.rating = rating;
    this.pathVariable = pathVariable; 
    }
}

function getGames(){
    return [
        new Game ("Forge Legend", "../img/game-img/GameHub_covers10.jpg", "Fantasy", 49.50, 3.9, "forge-legend"),
        new Game ("Cyberpunk", "../img/game-img/GameHub_covers9.jpg", "Action", 39.00, 2.9, "cyberpunk"),
        new Game ("Boxer", "../img/game-img/GameHub_covers8.jpg", "Sport", 49.50, 3.4, "boxer"),
        new Game ("Racing", "../img/game-img/GameHub_covers7.jpg", "Sport", 25.50, 3.3, "racing"),
        new Game ("Space War", "../img/game-img/GameHub_covers6.jpg", "Action", 49.50, 4.1, "space-war"),
        new Game ("Assassin", "../img/game-img/GameHub_covers5.jpg", "Action", 49.50, 3.8, "assassin"),
        new Game ("Furious", "../img/game-img/GameHub_covers4.jpg", "Action", 59.00, 4.5, "furious"),
        new Game ("Black", "../img/game-img/GameHub_covers3.jpg", "Horror", 39.50, 4.0, "black"),
        new Game ("Super Duper", "../img/game-img/GameHub_covers2.jpg", "Sport", 19.50, 1.9, "super-duper"),
        new Game ("Ping Pong", "../img/game-img/GameHub_covers.jpg", "Sport", 39.50, 4.1, "ping-pong"),
    ]
}

console.log(Game); 

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