import React, { useEffect } from "react";
import "./FilterCheckbox.css";

function FilterCheckbox({ checkboxChecked, setCheckboxChecked, form }) {
    const handleCheck = () => {
        setCheckboxChecked(!checkboxChecked);
    };
    useEffect(() => {
        if (form) {
            if (typeof form.requestSubmit === "function") {
                form.requestSubmit();
            } else {
                form.dispatchEvent(new Event("submit", { cancelable: true }));
            }
        }
    }, [checkboxChecked]);

    return (
        <>
            <label className="search-form__filter" htmlFor="filter">
                <input
                    id="filter"
                    className="search-form__checkbox"
                    type="checkbox"
                    checked={checkboxChecked}
                    onChange={handleCheck}
                />
                Короткометражки
            </label>
        </>
    );
}

export default FilterCheckbox;
