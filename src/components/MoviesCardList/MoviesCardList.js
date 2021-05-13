import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";

function MoviesCardList({ movies, isSavedPage = false, handleMovieLike }) {
    console.log(movies)
    if (!movies) {
        return null;
    }

    return (
        <div className="movies-cardlist">
            <ul className="movies-cardlist__list">
                {movies.map((movie) => (
                    <MoviesCard
                        key={movie.id}
                        data={movie}
                        isSavedPage={isSavedPage}
                        handleMovieLike={handleMovieLike}
                    />
                ))}
            </ul>
        </div>
    );
}

export default MoviesCardList;
