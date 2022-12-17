const listOfGames = document.querySelector(".game-details")

class Game {
    constructor(gameName, gameImage, gameGenre, gamePrice, gameRating, pathVariable) {
    this.gameName = gameName; 
    this.gameImage = gameImage;
    this.gameGenre = gameGenre;
    this.gamePrice = gamePrice;
    this.gameRating = gameRating;
    this.pathVariable = pathVariable; 
    }
}

function getGames(){
    return [
        new Game ("Forge Legend", "img", "Fantasy", 49.50, 3.9, "forge-legend"),
        new Game ("Cyberpunk", "img", "Action", 39.00, 2.9, "cyberpunk"),
        new Game ("Boxer", "img", "Sport", 49.50, 3.4, "boxer"),
        new Game ("Racing", "img", "Sport", 25.50, 3.3, "racing"),
        new Game ("Space War", "img", "Action", 49.50, 4.1, "space-war"),
        new Game ("Assassin", "img", "Action", 49.50, 3.8, "assassin"),
        new Game ("Furious", "img", "Action", 59.00, 4.5, "furious"),
        new Game ("Black", "img", "Horror", 39.50, 4.0, "black"),
        new Game ("Super Duper", "img", "Sport", 19.50, 1.9, "super-duper"),
        new Game ("Ping Pong", "img", "Sport", 39.50, 4.1, "ping-pong"),
    ]
}

console.log(Game); 

getGames().forEach(game => {
    listOfGames.innerHTML += `
    <div class="game-in-list">
    ${game.gameName}
    </div>`
});