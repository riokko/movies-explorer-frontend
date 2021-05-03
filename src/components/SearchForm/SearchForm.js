import React from "react";
import Row from "../Row";

function SearchForm() {
    return (
        <div className="search-form">
            <Row>
                <form className="search-form__form">
                    <div className="search-form__search-content">
                        <input
                            type="text"
                            className="search-form__input"
                            placeholder="Фильм"
                            id="movie"
                        />
                        <button type="submit" className="search-form__button" />
                    </div>
                    <label className="search-form__filter" htmlFor="filter">
                        <input
                            id="filter"
                            className="search-form__checkbox"
                            type="checkbox"
                        />
                        Короткометражки
                    </label>
                </form>
                <hr className="search-form__divider" />
            </Row>
        </div>
    );
}

export default SearchForm;
