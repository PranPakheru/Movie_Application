import React, { useContext, useEffect, useState } from "react";
import "./CardStyle.css";

import { genreIntersectionMovies, truncateText } from "../source/utils/helper";

import PosterCard from "./posterCard";
import MyContext from "../../context/MyContext";

const MoviesCard = () => {
  const {
    movieData,
    searchResults,
    tv_webSeriesData,
    currentPage,
    genreMovie,
    genreId,
  } = useContext(MyContext);
  const [filteredGenreMovies, setFilteredGenreMovies] = useState([]);

  useEffect(() => {
    if (genreId.length == 0) {
      setFilteredGenreMovies([]);
    } else {
      const resultData = genreIntersectionMovies(genreId, genreMovie);
      setFilteredGenreMovies(resultData);
    }
  }, [genreId.length]);

  return (
    <>
      <PosterCard
        data={
          currentPage === "movie"
            ? movieData
            : currentPage === "genre"
            ? filteredGenreMovies
            : currentPage === "search"
            ? searchResults
            : tv_webSeriesData
        }
      />
    </>
  );
};

export default MoviesCard;
