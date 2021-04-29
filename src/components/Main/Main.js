import React from "react";
import Promo from "../Promo/Promo";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Potfolio";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function Main({ loggedIn }) {
  return (
    <div className="content">
      {loggedIn ? (
        <div>
          <SearchForm />
          <MoviesCardList />
        </div>
      ) : (
        <div>
          <Promo />
          <AboutProject />
          <Techs />
          <AboutMe />
          <Portfolio />
        </div>
      )}
    </div>
  );
}

export default Main;
