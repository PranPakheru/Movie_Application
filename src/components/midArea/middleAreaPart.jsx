import React, { useContext, useEffect, useState } from "react";
import "./middleAreaPartStyle.css";
import { AxiosService } from "../source/services/AxiosService";
import MoviesCard from "../card/card";
import { Pagination } from "@mui/material";
import MyContext from "../../context/MyContext";

const middleAreaPart = () => {
  const axiosService = new AxiosService();

  const { setMovieData, setGenreList, setCurrentPage } = useContext(MyContext);
  const [totalPage, setTotalPage] = useState(1);
  const [pageNav, setPageNav] = useState(1);

  const [loader, setLoader] = useState(false);
  const [err, setErr] = useState(false);

  useEffect(() => {
    setCurrentPage("movie");
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

  const getMovieList = (page = 1) => {
    setLoader(true);

    axiosService
      .fetchMovieList(page)
      .then((response) => {
        if (response) {
          setTotalPage(response.total_pages);
          setMovieData(response.results);
        }
        setLoader(false);
      })
      .catch((error) => {
        setLoader(false);
        setErr(true);
      });
  };

  useEffect(() => {
    getMovieList();
    setPageNav(1);
  }, []);

  return (
    <div>
      {loader ? (
        <div style={{ height: "100vh", textAlign: "center" }}>
          {" "}
          <h1 className="loaderData">wait for movie...</h1>
        </div>
      ) : err ? (
        <h1 className="loaderData">
          something went wrong, reload the page and try again...
        </h1>
      ) : (
        <>
          <div className="middlePart">
            <MoviesCard type="movie" />
          </div>
          <div className="paginationDiv">
            <Pagination
              sx={{ color: "white" }}
              count={totalPage}
              color="primary"
              page={pageNav}
              onChange={(event, page) => {
                setPageNav(page);
                getMovieList(page);
              }}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default middleAreaPart;
