import "./App.css";
import HeaderPart from "./components/header/headerPart";
import MiddleAreaPart from "./components/midArea/middleAreaPart";
import FooterPart from "./components/footer/footerPart";
import { Route, Routes } from "react-router-dom";
import SearchPage from "./components/routingPages/searchPage";
import MoviePage from "./components/routingPages/moviePage";
import GenrePage from "./components/routingPages/genrePage";
import TV_WebSeriesPage from "./components/routingPages/tv_webSeriesPage";
import ErrorPage from "./components/routingPages/errorPage";
import { MyContextProvider } from "./context/MyContext";

function App() {
  return (
    <>
      <MyContextProvider>
        <div className="container">
          <HeaderPart />
          <Routes>
            <Route path="/searchPage" element={<SearchPage />} />
          </Routes>
          <Routes>
            <Route path="/details" element={<MoviePage />} />
          </Routes>
          <Routes>
            <Route path="/genrePage" element={<GenrePage />} />
          </Routes>
          <Routes>
            <Route path="/tv" element={<TV_WebSeriesPage />} />
          </Routes>
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <MiddleAreaPart />
                </div>
              }
            />
          </Routes>
          <Routes>
            <Route path="/*" element={<ErrorPage />} />
          </Routes>

          <FooterPart />
        </div>
      </MyContextProvider>
    </>
  );
}

export default App;
