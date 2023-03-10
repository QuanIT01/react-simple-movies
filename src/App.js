import { Fragment, lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "swiper/scss";
import Banner from "./components/banner/Banner";
import Main from "./components/layout/Main";
//import MovieDetailsPage from "./components/movie/MovieDetailsPage";
//import HomePage from "./page/HomePage";
//import MoviePage from "./page/MoviePage";

const HomePage = lazy(() => import("./page/HomePage"));
const MovieDetailsPage = lazy(() =>
  import("./components/movie/MovieDetailsPage")
);
//const MoviePageV2 = lazy(() => import("./page/MoviePageV2"));
const MoviePage = lazy(() => import("./page/MoviePage"));

function App() {
  return (
    <Fragment>
      <Suspense fallback={<></>}>
        <Routes>
          <Route element={<Main></Main>}>
            <Route
              path="/"
              element={
                <>
                  <Banner></Banner>
                  <HomePage></HomePage>
                </>
              }
            ></Route>
            <Route path="/movies" element={<MoviePage></MoviePage>}></Route>
            <Route
              path="/movie/:movieId"
              element={<MovieDetailsPage></MovieDetailsPage>}
            ></Route>
          </Route>
        </Routes>
      </Suspense>
    </Fragment>
  );
}

export default App;
