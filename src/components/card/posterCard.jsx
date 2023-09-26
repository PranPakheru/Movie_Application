import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import "./CardStyle.css";
import StarIcon from "@mui/icons-material/Star";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { truncateText } from "../source/utils/helper";
import { useNavigate } from "react-router-dom";
import MyContext from "../../context/MyContext";

const PosterCard = ({ data }) => {
  const { setSelectedMovieData, setMovieId, currentPage, genreList } =
    useContext(MyContext);

  const navigate = useNavigate();

  const getGenresName = (genreIds, genreList) => {
    let result = genreList.map((gen) => {
      if (genreIds.includes(gen.id)) {
        return gen.name;
      }
    });
    return result;
  };

  const handleMovieId = (id) => {
    setMovieId(id);
    const selectedMovie = data.find((movie) => movie.id === id);
    setSelectedMovieData(selectedMovie);
    navigate(`/details`);
  };

  return (
    <>
      {data && (
        <>
          {data.length > 0 &&
            data.map((data, i) => (
              <>
                <Card
                  sx={{ margin: "5px" }}
                  onClick={() => handleMovieId(data.id)}
                >
                  <CardActionArea sx={{ display: "flex" }}>
                    <CardMedia
                      className="posterImage"
                      component="img"
                      image={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
                      alt="images"
                    />
                    <CardContent sx={{ width: "200px", height: "270px" }}>
                      <Typography gutterBottom variant="h5" component="div">
                        {currentPage === "movie" ||
                        currentPage === "genre" ||
                        currentPage === "search"
                          ? data.title
                          : data.original_name}
                      </Typography>
                      <div className="cardRating">
                        <Typography
                          sx={{ display: "flex", alignItem: "center" }}
                          gutterBottom
                          variant="h6"
                          component="div"
                        >
                          <StarIcon color="black" width={15} />{" "}
                          {data.vote_average}
                        </Typography>
                        <Typography
                          sx={{ display: "flex", alignItem: "center" }}
                          gutterBottom
                          variant="h6"
                          component="div"
                        >
                          <CalendarMonthIcon color="#00ff00" width={15} />{" "}
                          {currentPage === "movie" ||
                          currentPage === "genre" ||
                          currentPage === "search"
                            ? data.release_date
                            : data.first_air_date}
                        </Typography>
                      </div>
                      {genreList &&
                        data.genre_ids &&
                        data.genre_ids.length > 0 && (
                          <div style={{ display: "flex", flexWrap: "wrap" }}>
                            {getGenresName(data.genre_ids, genreList).map(
                              (g) => (
                                <>
                                  {g && g.length > 0 && (
                                    <Chip
                                      sx={{ margin: "1px" }}
                                      label={g}
                                      color="primary"
                                      key={g}
                                    />
                                  )}
                                </>
                              )
                            )}
                          </div>
                        )}
                      <Typography variant="body2" color="text.secondary">
                        {truncateText(data.overview, 80)}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </>
            ))}
        </>
      )}
    </>
  );
};

export default PosterCard;
