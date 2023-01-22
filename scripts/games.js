const url = "http://localhost:8888/wp-json/wc/store/products"

class Game {
    constructor(id, name, image, description, genre, price, rating, pathVariable) {
    this.id = id; 
    this.name = name; 
    this.image = image;
    this.description = description;
    this.genre = genre;
    this.price = price;
    this.rating = rating;
    this.pathVariable = pathVariable; 
    }
}

const getGames = async() => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        let games = [];
        for (let i = 0; i < data.length; i++){
            const game = new Game (
                data[i]["id"],
                data[i]["name"],
                data[i]["images"]["scr"],
                data[i]["short_description"],
                data[i]["type"],
                data[i]["prices"]["price"],
                data[i]["average_rating"],
                ""
            );
            games.push(game);
        }
        return games;
        }

    catch (error){
        console.log("Couldn't fetch");
    }
    finally {
        return [];
    }
}

