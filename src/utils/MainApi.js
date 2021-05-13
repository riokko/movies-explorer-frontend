// const BASE_URL = "https://api.movie.nomoredomains.icu";
const BASE_URL = "http://localhost:3001";

class MainApi {
    constructor({ url }) {
        this._baseUrl = url;
        this._mimeType = "application/json";
        this._token = `Bearer ${localStorage.getItem("token")}`;
    }

    setToken(token) {
        this._token = `Bearer ${token}`;
    }

    register(name, email, password) {
        return fetch(`${this._baseUrl}/signup`, {
            method: "POST",
            headers: {
                "Content-Type": this._mimeType,
            },
            body: JSON.stringify({ name, email, password }),
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

    login(email, password) {
        return fetch(`${this._baseUrl}/signin`, {
            method: "POST",
            headers: {
                "Content-Type": this._mimeType,
            },
            body: JSON.stringify({ email, password }),
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

    getUserData(token) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: "GET",
            headers: {
                "Content-Type": this._mimeType,
                Authorization: `Bearer ${token}`,
            },
        })
            .then((response) => response)
    }
}

const apiConfig = {
    url: BASE_URL,
};

const mainApi = new MainApi(apiConfig);

export default mainApi;