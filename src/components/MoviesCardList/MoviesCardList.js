import React, {useState} from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";

function MoviesCardList({
    movies,
    isSavedPage = false,
    numberOfDownloadedMovies,
    searchInputValue,
}) {


    function filterSearch(movie) {
        // Возвращает true, если значение searchInputValue есть в описании к фильму или в названиях
        const regex = new RegExp(searchInputValue, "gi");
        return (
            regex.test(movie.description) ||
            regex.test(movie.nameRU) ||
            regex.test(movie.nameEN)
        );
    }
    const filteredMovies = movies.filter(filterSearch);

    function createSlicedMoviesCardList() {
        return filteredMovies
            .slice(0, numberOfDownloadedMovies)
            .map((movie) => (
                <MoviesCard
                    key={movie.id}
                    data={movie}
                    isSavedPage={isSavedPage}
                />
            ));
    }

    return (
        <div className="movies-cardlist">
            <ul className="movies-cardlist__list">
                {createSlicedMoviesCardList()}
            </ul>
        </div>
    );
}

export default MoviesCardList;
