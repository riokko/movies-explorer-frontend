import React from "react";
import Row from "../Row";
import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";

function MoviesCardList({ movies, isSavedPage = false }) {
    return (
        <div className="movies-cardlist">
            <Row>
                <ul className="movies-cardlist__list">
                    {movies.map((movie, index) => (
                        <MoviesCard
                            key={index} // временное решение, пока данные не приходят из api
                            data={movie}
                            isSavedPage={isSavedPage}
                        />
                    ))}
                </ul>
            </Row>
        </div>
    );
}

export default MoviesCardList;
