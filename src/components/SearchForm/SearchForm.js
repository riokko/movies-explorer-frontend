import React, { useEffect, useRef, useState } from "react";
import classnames from "classnames";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import "./SearchForm.css";

// TODO поиск корометражек

function SearchForm({
    setMovies,
    handleIsLoading,
    setNothingFound,
    setShowSearchError,
    movies,
}) {
    const [inputValue, setInputValue] = useState("");
    const [showError, setShowError] = useState(false);
    const [checkboxChecked, setCheckboxChecked] = useState(false);
    const inputRef = useRef();
    const formRef = useRef(null);

    const isFirstRender = useRef(true);

    useEffect(() => {
        if (isFirstRender.current) {
            const savedInputValue = localStorage.getItem("searchInput") || [];
            if (savedInputValue.length > 0) setInputValue(savedInputValue);
            isFirstRender.current = false;
        }
    }, []);

    const filterSearch = (movie, searchText) => {
        // Возвращает true, если значение searchText есть в описании к фильму или в названиях
        const regex = new RegExp(searchText, "gi");
        return (
            regex.test(movie.description) ||
            regex.test(movie.nameRU) ||
            regex.test(movie.nameEN)
        );
    };

    const searchMovies = (searchText, loadingSetter) => {
        let filteredMovies = movies.filter((movie) =>
            filterSearch(movie, inputValue)
        );

        if (checkboxChecked) {
            filteredMovies = filteredMovies.filter(
                (movie) => movie.duration <= 40
            );
        }

        if (filteredMovies.length === 0) {
            setNothingFound(filteredMovies.length === 0);
        }

        setMovies(filteredMovies);
        loadingSetter(false);
        setShowError(false);
        setShowSearchError(false);
    };

    const handleChange = (e) => {
        setInputValue(e.target.value);
        setShowError(false);
    };

    const handleSubmitSearchForm = (e) => {
        e.preventDefault();
        if (!inputRef.current.validity.valid) {
            setShowError(true);
        } else {
            handleIsLoading(true);
            localStorage.setItem("searchInput", inputValue); // поисковый запрос обновляется в локальном хранилище
            searchMovies(inputValue, handleIsLoading);
        }
    };

    return (
        <div className="search-form">
            <form
                className="search-form__form"
                onSubmit={handleSubmitSearchForm}
                noValidate
                ref={formRef}
            >
                <div className="search-form__search-content">
                    <input
                        ref={inputRef}
                        type="text"
                        className="search-form__input"
                        placeholder="Фильм"
                        id="movie"
                        required
                        // value={inputValue}
                        onChange={handleChange}
                    />

                    <button type="submit" className="search-form__button" />
                </div>
                <FilterCheckbox
                    setCheckboxChecked={setCheckboxChecked}
                    checkboxChecked={checkboxChecked}
                    form={formRef.current}
                />
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
