import React, {useState} from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import "./SearchForm.css";

function SearchForm({ fetchData, setSearchInputValue }) {
    const searchInputSelector = document.querySelector(".search-form__input");
    const searchErrorSelector = document.querySelector(".search-form__error");

    const [isLoading, setIsLoading] = useState(false);

    function handleChange(e) {
        searchInputSelector.addEventListener("input", () => {
            searchErrorSelector.classList.remove("search-form__show-error");
        });
    }

    function handleSubmitSearchForm(e) {
        e.preventDefault();
        if (searchInputSelector.validity.valid === false) {
            searchErrorSelector.classList.add("search-form__show-error");
        } else {
            setIsLoading(true);
            setSearchInputValue(searchInputSelector.value); // поисковый запрос передаётся в стейт-переменную
            localStorage.setItem("searchInput", searchInputSelector.value); // поисковый запрос обновляется в локальном хранилище
            fetchData();
            setIsLoading(false);
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
                        type="text"
                        className="search-form__input"
                        placeholder="Фильм"
                        id="movie"
                        required
                        onChange={handleChange}
                    />

                    <button type="submit" className="search-form__button" />
                </div>
                <FilterCheckbox />
                <span className="search-form__error" id="movie-error">
                    Нужно ввести ключевое слово
                </span>
            </form>
            <hr className="search-form__divider" />
        </div>
    );
}

export default SearchForm;
