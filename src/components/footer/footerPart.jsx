import React from "react";
import "./footerPartStyle.css";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import Box from "@mui/material/Box";
import WebStoriesIcon from "@mui/icons-material/WebStories";
import SearchIcon from "@mui/icons-material/Search";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import HomeIcon from "@mui/icons-material/Home";
import { Link, useLocation } from "react-router-dom";

const labelStyle = { color: "#322653" };
const footerPart = () => {
  return (
    <Box
      sx={{
        position: "sticky",
        bottom: 0,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <BottomNavigation
        showLabels
        sx={{ background: "#FFD2D7", width: "auto", borderRadius: "50px" }}
        value={useLocation().pathname}
      >
        <BottomNavigationAction
          sx={labelStyle}
          label="Home"
          icon={<HomeIcon />}
          component={Link}
          to={"/"}
          value={"/"}
        />

        <BottomNavigationAction
          sx={labelStyle}
          label="Genre"
          icon={<BorderColorIcon />}
          component={Link}
          to={"/genrePage"}
          value={"/genrePage"}
        />
        <BottomNavigationAction
          sx={labelStyle}
          label="TV/Web series"
          icon={<WebStoriesIcon />}
          component={Link}
          to={"/tv"}
          value={"/tv"}
        />
        <BottomNavigationAction
          sx={labelStyle}
          label="Search"
          icon={<SearchIcon />}
          component={Link}
          to={"/searchPage"}
          value={"/searchPage"}
        />
      </BottomNavigation>
    </Box>
  );
};

export default footerPart;
