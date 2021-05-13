import React, { useContext} from "react";
// import { CurrentUserContext } from "../../contexts/CurrentUserContext";

import Row from "../Row";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const movies = [
    {
        name: "33 слова о дизайне",
        duration: 107,
        like: true,
        thumbnail: "https://ic.wampi.ru/2021/05/06/first_movie.jpg",
    },
    {
        name: "В погоне за Бенкси",
        duration: 102,
        like: true,
        thumbnail: "https://ic.wampi.ru/2021/05/06/third_movie.png",
    },
];

function SavedMovies({ loggedIn }) {
    // const currentUser = useContext(CurrentUserContext);

    return (
            <div className="movies">
                <Header loggedIn={loggedIn} />
                <Row>
                    <SearchForm />
                    <MoviesCardList movies={movies} isSavedPage />
                    <Footer />
                </Row>
            </div>
    );
}

export default SavedMovies;
