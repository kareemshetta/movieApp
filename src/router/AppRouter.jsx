import { Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";
// import ContactUs from "../pages/contactUs/ContactUs";
// import AboutUs from "../pages/aboutUs/AboutUs";
// import NotFound from "../pages/notFound/NotFound";
// import Movies from "../pages/movies/Movies";
// import MovieDetail from "../pages/movieDetail/MovieDetail";
import NavLayout from "../layout/NavLayout";
// import Search from "../pages/search/Search";
// import FavouriteMovies from "../pages/favourite/FavouriteMovies";
// import FormLogin from "../pages/form/form";
// import TopRatedMovies from "../pages/topRated/TopRated";
// import UpcomingMovies from "../pages/upcoming/UpcomingMovies";
// import Home from "../pages/home/Home";
const ContactUs = React.lazy(() => import("../pages/contactUs/ContactUs"));
const AboutUs = React.lazy(() => import("../pages/aboutUs/AboutUs"));
const NotFound = React.lazy(() => import("../pages/notFound/NotFound"));
const Movies = React.lazy(() => import("../pages/movies/Movies"));
const MovieDetail = React.lazy(() =>
  import("../pages/movieDetail/MovieDetail")
);
const Search = React.lazy(() => import("../pages/search/Search"));
const FormLogin = React.lazy(() => import("../pages/form/form"));
const TopRatedMovies = React.lazy(() => import("../pages/topRated/TopRated"));
const UpcomingMovies = React.lazy(() =>
  import("../pages/upcoming/UpcomingMovies")
);
const Home = React.lazy(() => import("../pages/home/Home"));
const FavouriteMovies = React.lazy(() =>
  import("../pages/favourite/FavouriteMovies")
);

const AppRouter = () => {
  const loadingComponent = (
    <div
      className="d-flex justify-content-center align-items-center mx-auto "
      style={{ width: "50px", height: "50px" }}
    >
      <i className="fa-solid fa-spinner fa-spin text-primary fa-3x"></i>
    </div>
  );
  return (
    <Routes>
      <Route element={<NavLayout />}>
        <Route
          path="/"
          element={
            <Suspense fallback={loadingComponent}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/movie"
          element={
            <Suspense fallback={loadingComponent}>
              <Movies />
            </Suspense>
          }
        />
        <Route
          path="/top-rated-movie"
          element={
            <Suspense fallback={loadingComponent}>
              <TopRatedMovies />
            </Suspense>
          }
        />

        <Route
          path="/home-movie"
          element={
            <Suspense fallback={loadingComponent}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/upcoming-movie"
          element={
            <Suspense fallback={loadingComponent}>
              <UpcomingMovies />
            </Suspense>
          }
        />
        <Route
          path="/movie-details/:id"
          element={
            <Suspense fallback={loadingComponent}>
              <MovieDetail />
            </Suspense>
          }
        />
        <Route
          path="/contact-us"
          element={
            <Suspense fallback={loadingComponent}>
              <ContactUs />
            </Suspense>
          }
        />
        <Route
          path="/movie-favourite"
          element={
            <Suspense fallback={loadingComponent}>
              <FavouriteMovies />
            </Suspense>
          }
        ></Route>
        <Route
          path="/about-us"
          element={
            <Suspense fallback={loadingComponent}>
              <AboutUs />
            </Suspense>
          }
        />
      </Route>
      <Route
        path="/movie-search/:name"
        element={
          <Suspense fallback={loadingComponent}>
            <Search />
          </Suspense>
        }
      />
      <Route
        path="/form"
        element={
          <Suspense fallback={loadingComponent}>
            <FormLogin />
          </Suspense>
        }
      />
      <Route
        path="*"
        element={
          <Suspense fallback={loadingComponent}>
            <NotFound />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default AppRouter;
/**
 * 
 *  <Route path="/" element={
          <Suspense fallback={<h1>Loading ...</h1>}>
            <Games />
          </Suspense>
        } />
 */
