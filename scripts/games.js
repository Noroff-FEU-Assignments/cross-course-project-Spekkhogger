const listOfGames = document.querySelector(".game-details")

class Game {
    constructor(id, name, image, genre, price, rating, pathVariable) {
    this.id = id; 
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
        new Game (10, "Forge Legend", "../img/game-img/GameHub_covers10.jpg", "Fantasy", 49.50, 3.9, "forge-legend"),
        new Game (9, "Cyberpunk", "../img/game-img/GameHub_covers9.jpg", "Action", 39.00, 2.9, "cyberpunk"),
        new Game (8, "Boxer", "../img/game-img/GameHub_covers8.jpg", "Sport", 49.50, 3.4, "boxer"),
        new Game (7, "Racing", "../img/game-img/GameHub_covers7.jpg", "Sport", 25.50, 3.3, "racing"),
        new Game (6, "Space War", "../img/game-img/GameHub_covers6.jpg", "Action", 49.50, 4.1, "space-war"),
        new Game (5, "Assassin", "../img/game-img/GameHub_covers5.jpg", "Action", 49.50, 3.8, "assassin"),
        new Game (4, "Furious", "../img/game-img/GameHub_covers4.jpg", "Action", 59.00, 4.5, "furious"),
        new Game (3, "Black", "../img/game-img/GameHub_covers3.jpg", "Horror", 39.50, 4.0, "black"),
        new Game (2, "Super Duper", "../img/game-img/GameHub_covers2.jpg", "Sport", 19.50, 1.9, "super-duper"),
        new Game (1, "Ping Pong", "../img/game-img/GameHub_covers.jpg", "Sport", 39.50, 4.1, "ping-pong"),
    ]
}