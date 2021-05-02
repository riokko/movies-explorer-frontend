import React from "react";

function MoviesCard(movies) {
  const { name, duration, like, thumbnail } = movies.data;
  const movieLikeButtonClassName = `movies-card__like ${
    like ? "movies-card__like_is_liked" : ""
  }`;

  function time_convert(num) {
    const hours = Math.floor(num / 60);
    const minutes = num % 60;
    return hours + "ч " + minutes + "м ";
  }

  return (
    <li className="movies-card">
      <img className="movies-card__thumbnail" alt={name} src={thumbnail} />
      <div className="movies-card__title">
        <h3 className="movies-card__name">{name}</h3>
        <div className={movieLikeButtonClassName} />
      </div>
      <p className="movies-card__duration">{time_convert(duration)}</p>
    </li>
  );
}

export default MoviesCard;
