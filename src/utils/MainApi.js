export const BASE_URL = "https://api.movie.nomoredomains.icu";

class MainApi {
    constructor({ baseUrl }) {
        this._baseUrl = baseUrl;
    }

    register(name, email, password) {
        fetch(`${BASE_URL}/signup`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email, password }),
        }).then((res) => res);
    }
}

const mainApi = new MainApi(BASE_URL);

export default mainApi;
