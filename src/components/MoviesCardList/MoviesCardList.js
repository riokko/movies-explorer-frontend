import React from "react";
// import { useLocation } from "react-router-dom";
import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";
import { BASE_URL } from "../../utils/MoviesApi";
import noCover from "../../images/no-thumb.png";

function MoviesCardList({
    movies,
    isSavedPage,
    setLikedMovies,
    likedMovies,
    fetchLikedMovies,
}) {
    // const [isLiked, setIsLiked] = useState(true);
    // const currentLocation = useLocation();
    // const path = currentLocation.pathname;
    if (!movies) {
        return null;
    }

    return (
        <div className="movies-cardlist">
            <ul className="movies-cardlist__list">
                {movies.map((movie) => {
                    const imageUrl = movie.image
                        ? `${BASE_URL}${movie.image.url}`
                        : noCover;
                    return (
                        <MoviesCard
                            key={isSavedPage ? movie.movieId : movie.id}
                            movie={movie}
                            isSavedPage={isSavedPage}
                            setLikedMovies={setLikedMovies}
                            likedMovies={likedMovies}
                            fetchLikedMovies={fetchLikedMovies}
                            image={isSavedPage ? movie.image : imageUrl}
                        />
                    );
                })}

                {}
            </ul>
        </div>
    );

    // return (
    //     <div className="movies-cardlist">
    //         <ul className="movies-cardlist__list">
    //             {path === "/movies"
    //                 ? movies.map((movie) => {
    //                       const imageUrl = movie.image
    //                           ? `${BASE_URL}${movie.image.url}`
    //                           : noCover;
    //                       return (
    //                           <MoviesCard
    //                               key={movie.id}
    //                               movie={movie}
    //                               isSavedPage={isSavedPage}
    //                               setLikedMovies={setLikedMovies}
    //                               likedMovies={likedMovies}
    //                               fetchLikedMovies={fetchLikedMovies}
    //                               image={imageUrl}
    //                               isLiked={isLiked}
    //                               setIsLiked={setIsLiked}
    //                           />
    //                       );
    //                   })
    //                 : likedMovies.map((movie) => {
    //                     console.log(movie)
    //                     return <MoviesCard
    //                         key={movie.movieId}
    //                         movie={movie}
    //                         isSavedPage={isSavedPage}
    //                         setLikedMovies={setLikedMovies}
    //                         likedMovies={likedMovies}
    //                         fetchLikedMovies={fetchLikedMovies}
    //                         image={movie.image}
    //                         isLiked={!isLiked}
    //                         setIsLiked={setIsLiked}
    //                     />
    //                 })}
    //
    //             {}
    //         </ul>
    //     </div>
    // );
}

export default MoviesCardList;
