import React from "react";
import "./SavedMovies.css";

import Row from "../Row";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const movies = [
    {
        name: "33 слова о дизайне",
        duration: 107,
        like: true,
        thumbnail:
            "https://downloader.disk.yandex.ru/preview/5fbce723b3167572b0e9febd84b02e1878f4dd0fde74f4a8e8b6ac3bc1dd8895/608ad5d8/6FKjjMxSG8vcrqN7sD_xLmaks5_ceDSOIsBsJPmUbOCUzlyQlK2CM7aJ71WuEY_0KfFcFKW-sZm_M7qu9sE8xA%3D%3D?uid=0&filename=first_movie.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=2880x1590",
    },
    {
        name: "В погоне за Бенкси",
        duration: 102,
        like: true,
        thumbnail:
            "https://downloader.disk.yandex.ru/preview/7bb5e3d4b7182376fdc7163ba0501ba78c618c6fe3436bf8e99533599d8d2ec4/608b4bbc/qdta7sji2l4sJ4QClyWbFzlguEwYNa97U0CnAVWjmu-9WwQI7A5L9pR6dSSqF6MBM1wVV9kMKr2_ToaxBzgg7A%3D%3D?uid=0&filename=third_movie.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&tknv=v2&size=2048x2048",
    },
];

function SavedMovies({ loggedIn }) {
    return (
        <div className="movies">
            <Header loggedIn={loggedIn} />
            <Row>
                <SearchForm />
                <MoviesCardList movies={movies} isSavedPage />
                <Footer />
            </Row>
        </div>
    );
}

export default SavedMovies;
