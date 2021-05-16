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
            .then((response) => response)
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
            .catch((err) => {
                console.log(err);
            });
    }

    getLikedMovies(token) {
        return fetch(`${this._baseUrl}/movies`, {
            method: "GET",
            headers: {
                "Content-Type": this._mimeType,
                Authorization: `Bearer ${token}`,
            },
        })
            .then((response) => response.json())
            .catch((e) => console.log(e));
    }

    like(movie, token) {
        return fetch(`${this._baseUrl}/movies`, {
            method: "POST",
            headers: {
                "Content-Type": this._mimeType,
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                movieId: movie.id,
                country: movie.country,
                director: movie.director,
                duration: movie.duration,
                year: movie.year,
                description: movie.description,
                image: movie.image,
                trailer: movie.trailerLink,
                nameRU: movie.nameRU,
                nameEN: movie.nameEN,
            }),
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

    dislike(id, token) {
        return fetch(`${this._baseUrl}/movies/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        });
    }
}

const apiConfig = {
    url: BASE_URL,
};

const mainApi = new MainApi(apiConfig);

export default mainApi;
