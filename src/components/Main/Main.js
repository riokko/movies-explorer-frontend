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
        <>
          <SearchForm />
          <MoviesCardList />
        </>
      ) : (
        <>
          <Promo />
          <AboutProject />
          <Techs />
          <AboutMe />
          <Portfolio />
        </>
      )}
    </div>
  );
}

export default Main;
