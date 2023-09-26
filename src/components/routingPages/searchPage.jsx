import React, { useContext, useEffect, useState } from "react";
import "./searchPageStyle.css";
import { Button, Pagination, TextField } from "@mui/material";
import { AxiosService } from "../source/services/AxiosService";
import MoviesCard from "../card/card";
import MyContext from "../../context/MyContext";

const searchPage = () => {
  const axiosService = new AxiosService();
  const [movieName, setmovieName] = useState("");

  const {
    searchResults,
    setSearchResults,
    setCurrentPage,
    setGenreList,
    totalSearchPages,
    setTotalSearchPages,
    searchPageNav,
    setSearchPageNav,
  } = useContext(MyContext);
  const [loader, setLoader] = useState(false);
  const [err, setErr] = useState(false);

  useEffect(() => {
    setCurrentPage("search");
  }, []);

  useEffect(() => {
    axiosService
      .fetchGenreList()
      .then((response) => {
        if (response) {
          setGenreList(response.genres);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const getSearchList = (page = 1) => {
    setLoader(true);
    axiosService
      .fetchSearchResults(movieName, page)
      .then((response) => {
        if (response) {
          setSearchResults(response.results);
          setTotalSearchPages(response.total_pages);
        }
        setLoader(false);
      })
      .catch((error) => {
        console.log(error);
        setLoader(false);
        setErr(true);
      });
  };

  const handleSearch = () => {
    setSearchPageNav(1);
    getSearchList();
  };

  return (
    <div>
      <div className="searchPage">
        <div className="searchBar">
          <TextField
            sx={{
              width: "1000px",
              backgroundColor: "white",
              borderRadius: "10px",
            }}
            label="movie"
            id="fullWidth"
            value={movieName}
            onChange={(e) => setmovieName(e.target.value)}
          />

          <Button
            sx={{
              marginLeft: "10px",
              borderRadius: "10px",
              height: "58px",
              width: "100px",
            }}
            variant="contained"
            color="success"
            onClick={handleSearch}
          >
            Search
          </Button>
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
              <MoviesCard />:<div className="lowerDiv"></div>
            </div>
          </>
        )}
      </div>

      {searchResults && searchResults.length > 0 && (
        <div className="paginationDiv">
          <Pagination
            sx={{ color: "white" }}
            count={totalSearchPages}
            color="primary"
            page={searchPageNav}
            onChange={(event, page) => {
              setSearchPageNav(page);
              getSearchList(page);
            }}
          />
        </div>
      )}
    </div>
  );
};

export default searchPage;
