import React from "react";
import "./Movies.css";

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
        thumbnail: "https://ic.wampi.ru/2021/05/06/first_movie.jpg",
    },
    {
        name: "Киноальманах «100 лет дизайна»",
        duration: 107,
        like: false,
        thumbnail: "https://ic.wampi.ru/2021/05/06/second_movie.jpg",
    },
    {
        name: "В погоне за Бенкси",
        duration: 102,
        like: true,
        thumbnail: "https://ic.wampi.ru/2021/05/06/third_movie.png",
    },
    {
        name: "Баския: Взрыв реальности",
        duration: 81,
        like: false,
        thumbnail: '"https://ic.wampi.ru/2021/05/06/fourth_movie.png"',
    },
];

function Movies({ loggedIn }) {
    return (
        <div className="movies">
            <Header loggedIn={loggedIn} />
            <Row>
                <SearchForm />
                <MoviesCardList movies={movies} />
                <button className="movies__more-button" type="button">
                    Ещё
                </button>
                <Footer />
            </Row>
        </div>
    );
}

export default Movies;
