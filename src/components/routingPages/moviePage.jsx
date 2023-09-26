import React, { useContext } from "react";
import "./MoviePageStyle.css";
import MyContext from "../../context/MyContext";

const moviePage = () => {
  const { selectedMovieData, currentPage } = useContext(MyContext);

  return (
    <>
      {selectedMovieData && (
        <div className="moviePageBanner">
          <div className="movieImg">
            <img
              className="backdropImage"
              src={`https://image.tmdb.org/t/p/w780/${selectedMovieData.backdrop_path}`}
            />
          </div>
          <div className="movieContent">
            <h2 className="movieTitle">
              Title:-{" "}
              {currentPage === "movie" || currentPage === "genre"
                ? selectedMovieData.title
                : currentPage === "search"
                ? selectedMovieData.original_title
                : selectedMovieData.original_name}
            </h2>
            <h2 className="movieTitle">
              Overview:- {selectedMovieData.overview}
            </h2>
            <h2 className="movieTitle">
              Spoken Language:- {selectedMovieData.original_language}
            </h2>
            <h2 className="movieTitle">
              Release Date:-{" "}
              {currentPage === "movie" ||
              currentPage === "genre" ||
              currentPage === "search"
                ? selectedMovieData.release_date
                : selectedMovieData.first_air_date}
            </h2>
            <h2 className="movieTitle">
              Rating:- {selectedMovieData.vote_average}
            </h2>
          </div>
        </div>
      )}
    </>
  );
};

export default moviePage;
