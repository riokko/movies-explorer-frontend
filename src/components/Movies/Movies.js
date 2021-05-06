import React from "react";
import "./Movies.css";

import Row from "../Row";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

function Movies({ loggedIn, movies, fetchData }) {
    return (
        <div className="movies">
            <Header loggedIn={loggedIn} />
            <Row>
                <SearchForm fetchData={fetchData} />
                <MoviesCardList movies={movies} />
                {movies.length > 0 ? (
                    <button className="movies__more-button" type="button">
                        Ещё
                    </button>
                ) : (
                    <p>
                        Введите название или ключевые слова в строку поиска.
                    </p>
                )}

                <Footer />
            </Row>
        </div>
    );
}

export default Movies;
