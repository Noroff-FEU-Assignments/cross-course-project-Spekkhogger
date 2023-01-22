const url = "https://sanna.codes/wp-json/wc/store/products";

const popularGames = document.querySelector(".grid-wrap-popular");
const featuredGames = document.querySelector(".grid-wrap-featured");

// let list = [];

// const getFeatured = async() => {
//     try {
//         const response = await fetch(url);
//         const data = await response.json();
//         console.log(data);

//         for (let i = 0; i < data.length; i++){
//             const tagData = data[i]["tags"][0]["name"];
        

//             if (tagData === "featured"){

//             }
//         }

//     }
//     catch (error) {
//         console.log(error);
//     }
// }

// getFeatured();

const getFeaturedLink = async() => {
    try {
        const response = await fetch(url);
        const data = await response.json();

        console.log(data);

        for (let i = 0; i < data.length; i++){
                const gameID = data[i]["id"];
                const gameName = data[i]["name"];
                const gameImage = data[i]["images"][0]["src"];
                const imageAlt = data[i]["images"]["alt"];
                const gameDescription = data[i]["short_description"];
                const gameGenre = data[i]["type"];
                const gamePrice = data[i]["prices"]["price"];
                const gameRating = data[i]["average_rating"];
                const pathVariable = gameName.replaceAll(' ', '-').toLowerCase();
                const tagData = data[i]["tags"][0]["name"];

                if (i === 4){break};
                console.log(gameID);

                popularGames.innerHTML += `
                    <div class="game-card">
                        <a href="productpage.html?game=${gameID}">
                            <img src="${gameImage}" alt="Game cover" class="video-game-product">
                        </a>
                        <div class="text-game-card">
                            <h3>${gameName}</h3>
                            <p>${gamePrice}NOK</p>
                        </div>
                        <a href="productpage.html?game=${gameID}"><button class="green-button">View</button></a>
                    </div>
                `;

                featuredGames.innerHTML += `
                <div class="game-card">
                    <a href="productpage.html?game=${gameID}">
                        <img src="${gameImage}" alt="Game cover" class="video-game-product">
                    </a>
                    <div class="text-game-card">
                        <h3>${gameName}</h3>
                        <p>${gamePrice}NOK</p>
                    </div>
                    <a href="productpage.html?game=${gameID}"><button class="green-button">View</button></a>
                </div>
                `;

        }
    }

    catch (error){
        console.log("Couldn't fetch" + error);
        listOfGames.innerHTML += `<h2> Oops, something went wrong. Please try again later`;
        
    }
}

getFeaturedLink();