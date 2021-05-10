import React from "react";
import "./MoviesCard.css";
import classnames from "classnames";
import noCover from "../../images/no-thumb.png";

import { BASE_URL } from "../../utils/MoviesApi";

function MoviesCard({ data: { _id, nameRU, duration, like, image }, isSavedPage }) {
    const imageUrl = image ? `${BASE_URL}${image.url}` : noCover;

    function time_convert(num) {
        const hours = Math.floor(num / 60);
        const minutes = num % 60;
        return hours + "ч " + minutes + "м ";
    }

    return (
        <li className="movies-card">
            <img className="movies-card__thumbnail" alt={nameRU} src={imageUrl} />
            <div className="movies-card__title">
                <h3 className="movies-card__name">{nameRU}</h3>
                <div
                    className={classnames("movies-card__control", {
                        "movies-card__control_delete": isSavedPage,
                        "movies-card__control_liked": !isSavedPage && like,
                        "movies-card__control_not-liked": !isSavedPage && !like,
                    })}
                />
            </div>
            <p className="movies-card__duration">{time_convert(duration)}</p>
        </li>
    );
}

export default MoviesCard;
