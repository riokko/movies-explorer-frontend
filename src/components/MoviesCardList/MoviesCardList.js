import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";

function MoviesCardList({
    movies,
    isSavedPage,
    setLikedMovies,
    likedMovies,
    fetchLikedMovies,
}) {
    if (!movies) {
        return null;
    }

    return (
        <div className="movies-cardlist">
            <ul className="movies-cardlist__list">
                {movies.map((movie) => (
                    <MoviesCard
                        key={movie.id}
                        movie={movie}
                        isSavedPage={isSavedPage}
                        setLikedMovies={setLikedMovies}
                        likedMovies={likedMovies}
                        fetchLikedMovies={fetchLikedMovies}
                    />
                ))}
            </ul>
        </div>
    );
}

export default MoviesCardList;
