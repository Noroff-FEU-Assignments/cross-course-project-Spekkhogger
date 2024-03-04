import { apiBase } from "./apiBase.mjs";

const apiClient =  {
    getAllGames: async () => {
        try {
            const response = await fetch(`${apiBase}`, {
                method: "GET", 
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const data = await response.json();
            return data; 
        } catch (error) {
            console.log(error);
        }
    },
    getGameById: async (id) => {
        try {
            const response = await fetch(`${apiBase}${id}`);
            const data = await response.json(); 
            return data; 
        } catch (error) {
            console.log(error); 
        }
    }
}; 

export default apiClient;