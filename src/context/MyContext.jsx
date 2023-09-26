import { createContext, useState } from "react";

const MyContext = createContext({
  movieData: {},
});

export const MyContextProvider = ({ children }) => {
  const [movieData, setMovieData] = useState({});
  const [genreList, setGenreList] = useState([]);
  const [tv_webSeriesData, setTV_webSeriesData] = useState([]);
  const [movieId, setMovieId] = useState(null);
  const [selectedMovieData, setSelectedMovieData] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const [currentPage, setCurrentPage] = useState("");
  const [genreMovie, setGenreMovie] = useState([]);
  const [totalSearchPages, setTotalSearchPages] = useState(1);
  const [totalGenrePage, setTotalGenrePage] = useState(1);
  const [searchPageNav, setSearchPageNav] = useState(1);
  const [genrePageNav, setGenrePageNav] = useState(1);
  const [genreId, setGenreId] = useState([]);

  return (
    <MyContext.Provider
      value={{
        movieData,
        setMovieData,
        tv_webSeriesData,
        setTV_webSeriesData,
        genreList,
        setGenreList,
        movieId,
        setMovieId,
        selectedMovieData,
        setSelectedMovieData,
        searchResults,
        setSearchResults,
        currentPage,
        setCurrentPage,
        genreMovie,
        setGenreMovie,
        totalSearchPages,
        setTotalSearchPages,
        totalGenrePage,
        setTotalGenrePage,
        searchPageNav,
        setSearchPageNav,
        genrePageNav,
        setGenrePageNav,
        genreId,
        setGenreId,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default MyContext;
