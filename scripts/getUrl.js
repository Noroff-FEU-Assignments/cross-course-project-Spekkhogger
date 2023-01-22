const listOfGames = document.querySelector(".game-details")
const url = "http://localhost:8888/wp-json/wc/store/products"

let newRelease = [];
let popular = [];

const getGames = async() => {
    try {
        const response = await fetch(url);
        const data = await response.json();

        console.log(data);

        for (let i = 0; i < data.length; i++){
                const gameID = data[i]["id"];
                const gameName = data[i]["name"];
                const gameImage = data[i]["images"][0]["scr"];
                const imageAlt = data[i]["images"]["alt"];
                const gameDescription = data[i]["short_description"];
                const gameGenre = data[i]["type"];
                const gamePrice = data[i]["prices"]["price"];
                const gameRating = data[i]["average_rating"];
                const pathVariable = gameName.replaceAll(' ', '-').toLowerCase();
                const tagData = data[i]["tags"][0]["name"];
                console.log(tagData);

                listOfGames.innerHTML += `
                <div class="list-game-wrap">
                    <div class="list-game-image">
                        <img src="${gameImage}" alt="Game cover" class="video-game-product">
                    </div>
                    <div class="list-game-info">
                        <h2>${gameName}</h2>
                        <h5>Playbox</h5>
                        <div class="list-game-price">
                            <h3>${gamePrice}NOK</h3>
                            <a href="productpage.html?game=${gameID}" class="green-button">View game</a>
                        </div>
                    </div>
                </div>
                `;
        }
        }

    catch (error){
        console.log("Couldn't fetch" + error);
        
    }
}

getGames();