import React, { useContext, useEffect, useState } from "react";
import "./TV_WebSeriesPageStyle.css";
import { AxiosService } from "../source/services/AxiosService";
import MoviesCard from "../card/card";
import { Pagination } from "@mui/material";
import MyContext from "../../context/MyContext";

const tv_webSeriesPage = () => {
  const axiosService = new AxiosService();
  const [totalPage, setTotalPage] = useState(1);
  const { tv_webSeriesData, setTV_webSeriesData, setCurrentPage } =
    useContext(MyContext);

  const [loader, setLoader] = useState(false);
  const [err, setErr] = useState(false);
  const [pageNav, setPageNav] = useState(1);

  const [genreList, setGenreList] = useState([]);

  useEffect(() => {
    setCurrentPage("tv");
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

  const getTVList = (page = 1) => {
    setLoader(true);
    axiosService
      .fetchTV_WebSeriesResults(page)
      .then((response) => {
        if (response) {
          setTotalPage(response.total_pages);
          setTV_webSeriesData(response.results);
        }
        setLoader(false);
      })
      .catch((error) => {
        console.log(error);
        setLoader(false);
        setErr(true);
      });
  };

  useEffect(() => {
    getTVList();
    setPageNav(1);
  }, []);

  return (
    <div>
      {loader ? (
        <h1 className="loaderData">wait for series...</h1>
      ) : err ? (
        <h1 className="loaderData">
          something went wrong, refresh the page and try again...
        </h1>
      ) : (
        <>
          <div className="middlePart">
            <MoviesCard type="tv" />
          </div>
        </>
      )}

      {tv_webSeriesData && tv_webSeriesData.length > 0 && (
        <div className="paginationDiv">
          <Pagination
            sx={{ color: "white" }}
            count={totalPage}
            color="primary"
            page={pageNav}
            onChange={(event, page) => {
              setPageNav(page);
              getTVList(page);
            }}
          />
        </div>
      )}
    </div>
  );
};

export default tv_webSeriesPage;
