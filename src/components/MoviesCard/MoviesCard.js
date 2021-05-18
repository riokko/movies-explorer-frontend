import React, { useEffect, useState } from "react";
import "./MoviesCard.css";
import classnames from "classnames";
// import noCover from "../../images/no-thumb.png";
//
// import { BASE_URL } from "../../utils/MoviesApi";
import mainApi from "../../utils/MainApi";

function MoviesCard({
    movie,
    isSavedPage,
    setLikedMovies,
    likedMovies,
    fetchLikedMovies,
    image,
}) {
    const {
        id,
        country,
        director,
        duration,
        year,
        description,
        trailerLink,
        nameRU,
        nameEN,
    } = movie;
    const token = localStorage.getItem("token");
    const [isLiked, setIsLiked] = useState(false);
    const [likedMovie, setLikedMovie] = useState(null);

    function time_convert(num) {
        const hours = Math.floor(num / 60);
        const minutes = num % 60;
        return hours + "ч " + minutes + "м ";
    }

    useEffect(() => {
        const likedMovie = likedMovies.filter(
            (likedMovie) => likedMovie.movieId === movie.id
        );
        setIsLiked(likedMovie.length > 0);
        setLikedMovie(likedMovie[0]);
        console.log(isLiked, likedMovie, movie.id)
    }, [isLiked, likedMovies, movie.id]);


    function movieLike() {
        mainApi
            .like(
                {
                    id,
                    country,
                    director,
                    duration,
                    year,
                    description,
                    image,
                    trailerLink,
                    nameRU,
                    nameEN,
                },
                token
            )
            .then((res) => {
                setIsLiked(isLiked);
                setLikedMovies([...likedMovies, res]);
                setLikedMovie(res[0]);
            })
            .catch((err) => console.log(err));
    }

    function movieDislike() {
        mainApi
            .dislike(isSavedPage ? movie._id : likedMovie._id, token)
            .then(() => {
                setIsLiked(false);
                setLikedMovie(null);
                fetchLikedMovies();
            })
            .catch((err) => console.log(err));
    }

    function handleLikeButton() {
        if (isSavedPage || isLiked) {
            movieDislike();
        } else {
            movieLike();
        }
    }

    return (
        <li className="movies-card">
            <a
                href={trailerLink}
                className="movies-card__trailer-link "
                target="_blank"
                rel="noreferrer"
            >
                <img
                    className="movies-card__thumbnail"
                    alt={nameRU}
                    src={image}
                />
            </a>
            <div className="movies-card__title">
                <h3 className="movies-card__name">{nameRU}</h3>
                <div
                    className={classnames("movies-card__control", {
                        "movies-card__control_delete": isSavedPage,
                        "movies-card__control_liked":
                            !isSavedPage && isLiked === true,
                        "movies-card__control_not-liked":
                            !isSavedPage && isLiked === false,
                    })}
                    onClick={handleLikeButton}
                />
            </div>
            <p className="movies-card__duration">{time_convert(duration)}</p>
        </li>
    );
}

export default MoviesCard;
