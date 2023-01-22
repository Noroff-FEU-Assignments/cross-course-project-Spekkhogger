const url = "https://sanna.codes/wp-json/wc/store/products";

const popularGames = document.querySelector("#popular-container");
const featuredGames = document.querySelector("#featured-container");

let list = [];

const getFeatured = async() => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);

        for (let i = 0; i < data.length; i++){
            const tagData = data[i]["tags"][0]["name"];
        

            if (tagData === "featured"){

            }
        }

    }
    catch (error) {
        console.log(error);
    }
}

getFeatured();