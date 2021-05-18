import React from "react";
import Row from "../Row";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

function SavedMovies({ loggedIn, likedMovies, setLikedMovies, fetchLikedMovies }) {

    return (
        <div className="movies">
            <Header loggedIn={loggedIn} />
            <Row>
                <SearchForm />
                <MoviesCardList
                    movies={likedMovies}
                    likedMovies={likedMovies}
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
