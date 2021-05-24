import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";
import { BASE_URL } from "../../utils/MoviesApi";
import noCover from "../../images/no-thumb.png";

function MoviesCardList({
    movies,
    isSavedPage,
    setLikedMovies,
    likedMovies,
    fetchLikedMovies,
}) {
    if (movies.length === 0) {
        return null;
    }

    return (
        <div className="movies-cardlist">
            <ul className="movies-cardlist__list">
                {movies.map((movie) => {
                    const imageUrl = movie.image
                        ? `${BASE_URL}${movie.image.url}`
                        : noCover;
                    return (
                        <MoviesCard
                            key={isSavedPage ? movie.movieId : movie.id}
                            movie={movie}
                            isSavedPage={isSavedPage}
                            setLikedMovies={setLikedMovies}
                            likedMovies={likedMovies}
                            fetchLikedMovies={fetchLikedMovies}
                            image={isSavedPage ? movie.image : imageUrl}
                        />
                    );
                })}

                {}
            </ul>
        </div>
    );
}

export default MoviesCardList;
