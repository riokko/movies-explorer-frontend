import React from "react";
import Row from "../Row";

function SearchForm() {
  return (
    <div className="search-form">
      <Row>
        <form className="search-form__form">
          <input
            type="text"
            className="search-form__input"
            placeholder="Фильм"
            id="movie"
          />
          <button type="button" className="search-form__button" />
        </form>
        {/*<label className="search-form__filter" htmlFor="filter">*/}
        {/*  <input id="filter" className="checkbox" type="checkbox" />*/}
        {/*  Короткометражки*/}
        {/*</label>*/}
      </Row>
    </div>
  );
}

export default SearchForm;
