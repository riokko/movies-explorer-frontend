import moviesApi from "./MoviesApi";
import {useRef} from "react";

const useGetMoviesHook = (setMoviesFromApi) => {
    const isFirstRender = useRef(true);
    if (isFirstRender.current) {
        const moviesList = localStorage.getItem("moviesList");
        if (!moviesList) {
            moviesApi
                .getMoviesListFromApi()
                .then((movies) => {
                    setMoviesFromApi(movies);
                    localStorage.setItem("moviesList", JSON.stringify(movies))
                })
                .catch((e) => console.log(e));
        } else {
            setMoviesFromApi(JSON.parse(moviesList));
        }

        // const savedMovies = JSON.parse(
        //     localStorage.getItem("filteredMovies") || "[]"
        // );
        // if (savedMovies.length > 0) setMovies(savedMovies);

        isFirstRender.current = false;
    }
}

export  default  useGetMoviesHook

