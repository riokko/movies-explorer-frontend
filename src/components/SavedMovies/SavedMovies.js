import React, {useEffect, useState} from "react";
import Row from "../Row";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

function SavedMovies({ loggedIn, movies, setLikedMovies, fetchLikedMovies }) {
    const [moviesList, setMoviesList] = useState([]);
    useEffect(() => {
        setMoviesList(movies)
    }, [movies])

    return (
        <div className="movies">
            <Header loggedIn={loggedIn} />
            <Row>
                <SearchForm
                    movies={movies}
                    setMovies={setMoviesList}
                />
                <MoviesCardList
                    movies={moviesList}
                    likedMovies={moviesList}
                    setLikedMovies={setLikedMovies}
                    isSavedPage
                    fetchLikedMovies={fetchLikedMovies}
                />
                <Footer />
            </Row>
        </div>
    );
}

export default SavedMovies;
