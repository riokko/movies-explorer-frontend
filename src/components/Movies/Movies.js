import React, { useEffect, useState } from "react";
import "./Movies.css";

import Row from "../Row";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Preloader from "../Preloader/Preloader";
import useGetMoviesHook from "../../utils/useGetMoviesHook";

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
    const [moviesFromApi, setMoviesFromApi] = useState([]);

    const handleShowMore = () => {
        setShownMovies([
            ...shownMovies,
            ...movies.slice(
                shownMovies.length,
                shownMovies.length + numberOfAddingMoreMovies
            ),
        ]);
    };

    useGetMoviesHook(setMoviesFromApi);

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

    useEffect(() => {
        const savedFilteredMovies = JSON.parse(localStorage.getItem('filteredMovies'));
        if (savedFilteredMovies) {
            setMovies(savedFilteredMovies);
        }
    }, [])

    const setNewWidth = () => {
        setScreenWidth(window.innerWidth);
    };

    return (
        <div className="movies">
            <Header loggedIn={loggedIn} />
            <Row>
                <SearchForm
                    setMovies={setMovies}
                    handleIsLoading={setIsLoading}
                    setNothingFound={setNothingFound}
                    setShowSearchError={setShowSearchError}
                    movies={moviesFromApi}
                />
                <MoviesCardList
                    movies={shownMovies}
                    likedMovies={likedMovies}
                    setLikedMovies={setLikedMovies}
                    fetchLikedMovies={fetchLikedMovies}
                    isSavedPage={false}
                />
                {isLoading && <Preloader />}
                {movies.length > 0 && showMore && (
                    <button
                        className="movies__more-button"
                        type="button"
                        onClick={handleShowMore}
                    >
                        ??????
                    </button>
                )}
                {nothingFound && <p>???????????? ???? ??????????????</p>}
                {showSearchError && (
                    <p>
                        ???? ?????????? ?????????????? ?????????????????? ????????????. ????????????????, ???????????????? ??
                        ?????????????????????? ?????? ???????????? ????????????????????. ?????????????????? ?????????????? ??
                        ???????????????????? ?????? ??????
                    </p>
                )}
                <Footer />
            </Row>
        </div>
    );
}

export default Movies;
