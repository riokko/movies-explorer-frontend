import React, { useEffect, useRef, useState } from "react";
import "./Movies.css";

import Row from "../Row";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Preloader from "../Preloader/Preloader";

const LOADING_MOVIES_CONFIG = {
    large: {
        onStart: 12,
        addMore: 3,
    },
    medium: {
        onStart: 8,
        addMore: 2,
    },
    small: {
        onStart: 5,
        addMore: 2,
    },
};

function Movies({ loggedIn, likedMovies, setLikedMovies, fetchLikedMovies }) {
    const [isLoading, setIsLoading] = useState(false);
    const [screenWidth, setScreenWidth] = useState(0);
    const [numberOfDownloadedMovies, setNumberOfDownloadedMovies] = useState(
        LOADING_MOVIES_CONFIG.large.onStart
    );
    const [numberOfAddingMoreMovies, setNumberOfAddingMoreMovies] = useState(
        LOADING_MOVIES_CONFIG.large.onStart
    );
    const [shownMovies, setShownMovies] = useState([]);
    const [showMore, setShowMore] = useState(true);
    const [movies, setMovies] = useState([]);
    const [nothingFound, setNothingFound] = useState(false);
    const [showSearchError, setShowSearchError] = useState(false);

    const isFirstRender = useRef(false);

    const handleShowMore = () => {
        setShownMovies([
            ...shownMovies,
            ...movies.slice(
                shownMovies.length,
                shownMovies.length + numberOfAddingMoreMovies
            ),
        ]);
    };
    useEffect(() => {
        if (!isFirstRender.current) {
            const savedMovies = JSON.parse(
                localStorage.getItem("filteredMovies") || "[]"
            );
            if (savedMovies.length > 0) setMovies(savedMovies);

            isFirstRender.current = true;
        }
    }, [movies]);


    useEffect(() => {
        if (shownMovies.length === movies.length) {
            setShowMore(false);
        }
    }, [shownMovies, movies]);

    useEffect(() => {
        setShownMovies(movies.slice(0, numberOfDownloadedMovies));
        setShowMore(true);
    }, [movies, numberOfDownloadedMovies]);

    useEffect(() => {
        setScreenWidth(window.innerWidth);
        if (screenWidth <= 760) {
            setNumberOfDownloadedMovies(LOADING_MOVIES_CONFIG.small.onStart);
            setNumberOfAddingMoreMovies(LOADING_MOVIES_CONFIG.small.addMore);
        }
        if (screenWidth > 760 && screenWidth <= 900) {
            setNumberOfDownloadedMovies(LOADING_MOVIES_CONFIG.medium.onStart);
            setNumberOfAddingMoreMovies(LOADING_MOVIES_CONFIG.medium.addMore);
        }
        if (screenWidth > 900) {
            setNumberOfDownloadedMovies(LOADING_MOVIES_CONFIG.large.onStart);
            setNumberOfAddingMoreMovies(LOADING_MOVIES_CONFIG.large.addMore);
        }
    }, [screenWidth]);

    useEffect(() => {
        function handleScreenResize() {
            setTimeout(setNewWidth, 600);
        }

        window.addEventListener("resize", handleScreenResize);

        return () => {
            window.removeEventListener("resize", handleScreenResize);
        };
    }, []);

    function setNewWidth() {
        setScreenWidth(window.innerWidth);
    }

    return (
        <div className="movies">
            <Header loggedIn={loggedIn} />
            <Row>
                <SearchForm
                    setMovies={setMovies}
                    handleIsLoading={setIsLoading}
                    setNothingFound={setNothingFound}
                    setShowSearchError={setShowSearchError}
                />
                <MoviesCardList
                    movies={shownMovies}
                    likedMovies={likedMovies}
                    setLikedMovies={setLikedMovies}
                    fetchLikedMovies={fetchLikedMovies}
                />
                {isLoading && <Preloader />}
                {movies.length > 0 && showMore && (
                    <button
                        className="movies__more-button"
                        type="button"
                        onClick={handleShowMore}
                    >
                        Ещё
                    </button>
                )}
                {nothingFound && <p>Ничего не найдено</p>}
                {showSearchError && (
                    <p>
                        Во время запроса произошла ошибка. Возможно, проблема с
                        соединением или сервер недоступен. Подождите немного и
                        попробуйте ещё раз
                    </p>
                )}
                <Footer />
            </Row>
        </div>
    );
}

export default Movies;
