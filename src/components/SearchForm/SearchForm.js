import React from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import "./SearchForm.css";

function SearchForm({ fetchData }) {

    function handleSubmitSearchForm(e) {
        e.preventDefault();
        if (!isValid(e.target)) {
            e.target
                .querySelector(".search-form__error")
                .classList.add("search-form__show-error");
        } else {
            e.target
                .querySelector(".search-form__error")
                .classList.remove("search-form__show-error");
            fetchData();
        }
    }

    function isValid(form) {
        return form.querySelector(".search-form__input").validity.valid;
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
