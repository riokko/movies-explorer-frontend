import React from "react";
import "./FilterCheckbox.css";

function FilterCheckbox() {
    return (
        <label className="search-form__filter" htmlFor="filter">
            <input
                id="filter"
                className="search-form__checkbox"
                type="checkbox"
            />
            Короткометражки
        </label>
    );
}

export default FilterCheckbox;
