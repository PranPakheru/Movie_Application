import { Chip, Pagination } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import MoviesCard from "../card/card";
import "./GenrePageStyle.css";
import { AxiosService } from "../source/services/AxiosService";
import MyContext from "../../context/MyContext";

const genrePage = () => {
  const [loader, setLoader] = useState(false);
  const [err, setErr] = useState(false);

  const axiosService = new AxiosService();
  const {
    genreList,
    setGenreList,
    genreMovie,
    setGenreMovie,
    setCurrentPage,
    totalGenrePage,
    setTotalGenrePage,
    genrePageNav,
    setGenrePageNav,
    genreId,
    setGenreId,
  } = useContext(MyContext);

  useEffect(() => {
    setCurrentPage("genre");
  }, []);

  const getGenreList = (genreId, page = 1) => {
    setLoader(true);

    axiosService
      .fetchSearchResultsOfGenre(genreId, page)
      .then((response) => {
        if (response) {
          setTotalGenrePage(response.total_pages);
          setGenreMovie([...genreMovie, ...response.results]);
        }
        setLoader(false);
      })
      .catch((error) => {
        console.log(error);
        setLoader(false);
        setErr(true);
      });
  };

  const handleChange = (event) => {
    const genreID = event.currentTarget.getAttribute("genre_id");
    setGenrePageNav(1);
    setGenreId([...genreId, genreID]);
    getGenreList(genreID);
  };

  const handleRemove = (gID) => {
    const afterDelete = genreId.filter((value) => value != gID);
    setGenreId(afterDelete);
  };

  useEffect(() => {
    setLoader(true);
    axiosService
      .fetchGenreList()
      .then((response) => {
        if (response) {
          setGenreList(response.genres);
        }
        setLoader(false);
      })
      .catch((error) => {
        console.log(error);
        setLoader(false);
        setErr(true);
      });
  }, []);

  return (
    <div>
      <div className="totalItems">
        <div className="chipBar">
          {genreList.map((genre) => (
            <>
              {genreId.includes(genre.id.toString()) ? (
                <Chip
                  sx={{ margin: 2 }}
                  label={genre.name}
                  color="primary"
                  genre_id={genre.id}
                  key={genre.id}
                  onDelete={() => {
                    handleRemove(genre.id);
                  }}
                />
              ) : (
                <Chip
                  sx={{ margin: 2 }}
                  label={genre.name}
                  color="primary"
                  genre_id={genre.id}
                  key={genre.id}
                  onClick={handleChange}
                />
              )}
            </>
          ))}
        </div>

        {loader ? (
          <h1 className="loaderData">wait for movie...</h1>
        ) : err ? (
          <h1 className="loaderData">
            something went wrong, refresh the page and try again...
          </h1>
        ) : (
          <>
            <div className="displayMovie">
              <MoviesCard />
            </div>
          </>
        )}

        {genreMovie && genreId.length > 0 && genreMovie.length > 0 ? (
          <div />
        ) : (
          <div style={{ height: "65vh" }} />
        )}
      </div>

      {genreMovie && genreMovie.length > 0 && genreId.length > 0 && (
        <div className="paginationDivGenre">
          <Pagination
            sx={{ color: "white" }}
            count={totalGenrePage}
            color="primary"
            page={genrePageNav}
            onChange={(event, page) => {
              setGenrePageNav(page);
              getGenreList(genreId, page);
            }}
          />
        </div>
      )}
    </div>
  );
};

export default genrePage;
