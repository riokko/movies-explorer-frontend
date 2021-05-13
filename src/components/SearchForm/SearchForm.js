import React, { useEffect, useRef, useState } from "react";
import classnames from "classnames";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import "./SearchForm.css";
import moviesApi from "../../utils/MoviesApi";

function SearchForm({
    setMovies,
    handleIsLoading,
    setNothingFound,
    setShowSearchError,
}) {
    const [inputValue, setInputValue] = useState("");
    const [showError, setShowError] = useState(false);
    const inputRef = useRef();

    const isFirstRender = useRef(false);

    useEffect(() => {
        if (!isFirstRender.current) {
            const savedInputValue = localStorage.getItem("searchInput") || [];

            if (savedInputValue.length > 0) setInputValue(savedInputValue);
            isFirstRender.current = true;
        }
    }, [inputValue]);

    function fetchData(searchText, loadingSetter) {
        moviesApi
            .getMoviesListFromApi()
            .then((movies) => {
                const filterSearch = (movie, searchText) => {
                    // Возвращает true, если значение searchText есть в описании к фильму или в названиях
                    const regex = new RegExp(searchText, "gi");
                    return (
                        regex.test(movie.description) ||
                        regex.test(movie.nameRU) ||
                        regex.test(movie.nameEN)
                    );
                };
                const filteredMovies = movies.filter((movie) =>
                    filterSearch(movie, inputValue)
                );
                setNothingFound(filteredMovies.length === 0);
                localStorage.setItem(
                    "filteredMovies",
                    JSON.stringify(filteredMovies)
                );
                setMovies(filteredMovies);
                loadingSetter(false);
                setShowError(false);
                setShowSearchError(false);
            })
            .catch((e) => {
                console.log(e);
                loadingSetter(false);
                setShowSearchError(true);
            });
    }

    function handleChange(e) {
        setInputValue(e.target.value);
        setShowError(false);
    }

    function handleSubmitSearchForm(e) {
        console.log();
        e.preventDefault();
        if (!inputRef.current.validity.valid) {
            setShowError(true);
        } else {
            handleIsLoading(true);
            localStorage.setItem("searchInput", inputValue); // поисковый запрос обновляется в локальном хранилище
            fetchData(inputValue, handleIsLoading);
        }
    }

    return (
        <div className="search-form">
            <form
                className="search-form__form"
                onSubmit={handleSubmitSearchForm}
                noValidate
            >
                <div className="search-form__search-content">
                    <input
                        ref={inputRef}
                        type="text"
                        className="search-form__input"
                        placeholder="Фильм"
                        id="movie"
                        required
                        value={inputValue}
                        onChange={handleChange}
                    />

                    <button type="submit" className="search-form__button" />
                </div>
                <FilterCheckbox />
                <span
                    className={classnames("search-form__error", {
                        "search-form__show-error": showError,
                    })}
                    id="movie-error"
                >
                    Нужно ввести ключевое слово
                </span>
            </form>
            <hr className="search-form__divider" />
        </div>
    );
}

export default SearchForm;
