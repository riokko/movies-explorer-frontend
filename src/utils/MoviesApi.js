export const BASE_URL = "https://api.nomoreparties.co";

class MoviesApi {
    constructor({ url }) {
        this._baseUrl = url;
        this._mimeType = "application/json";
    }

     getMoviesListFromApi() {
        return fetch(`${this._baseUrl}/beatfilm-movies`, {
            method: "GET",
            headers: {
                "Content-Type": this._mimeType,
            },
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                return Promise.reject(new Error(`${response.status}`));
            })
            .catch((err) => {
                console.log(err);
            });
    }
}
const apiConfig = {
    url: BASE_URL,
};

const moviesApi = new MoviesApi(apiConfig);

export default moviesApi;
