import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const errorPage = () => {
  const routes = [
    "/",
    "/genrePage",
    "/movie/details",
    "/tv/details",
    "/tv",
    "/searchPage",
  ];
  const location = useLocation();

  const [show, setShow] = useState(false);

  useEffect(() => {
    if (location && routes.includes(location.pathname)) {
      setShow(true);
    }
  }, []);

  return !show ? (
    <div style={{ display: "flex", justifyContent: "center", height: "90vh" }}>
      <h2 style={{ color: "white", fontSize: "50px", marginTop: "20%" }}>
        404 Not Found
      </h2>
    </div>
  ) : (
    <></>
  );
};

export default errorPage;
