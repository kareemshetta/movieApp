import { Route, Routes } from "react-router-dom";
import React, { Suspense, useEffect } from "react";
import { checkLogin, isLoginUser } from "../store/slices/AuthSlice";
import { useDispatch, useSelector } from "react-redux";
import ProtectedRoute from "../component/protectedRoute/ProtectedRoute";
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
  const isUserLogin = useSelector(isLoginUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkLogin());
  }, []);
  useEffect(() => {
    dispatch(checkLogin());
    // console.log("running");
    console.log(isUserLogin);
  }, [isUserLogin]);
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
              {isUserLogin ? <Home></Home> : <FormLogin />}
            </Suspense>
          }
        />

        <Route
          path="/movie"
          element={
            <ProtectedRoute>
              <Suspense fallback={loadingComponent}>
                <Movies />
              </Suspense>
            </ProtectedRoute>
          }
        />
        <Route
          path="/top-rated-movie"
          element={
            <Suspense fallback={loadingComponent}>
              <ProtectedRoute>
                <TopRatedMovies />
              </ProtectedRoute>
            </Suspense>
          }
        />

        <Route
          path="/home-movies"
          element={
            <ProtectedRoute>
              <Suspense fallback={loadingComponent}>
                <Home />
              </Suspense>
            </ProtectedRoute>
          }
        />
        <Route
          path="/upcoming-movie"
          element={
            <ProtectedRoute>
              <Suspense fallback={loadingComponent}>
                <UpcomingMovies />
              </Suspense>
            </ProtectedRoute>
          }
        />
        <Route
          path="/movie-details/:id"
          element={
            <ProtectedRoute>
              <Suspense fallback={loadingComponent}>
                <MovieDetail />
              </Suspense>
            </ProtectedRoute>
          }
        />
        <Route
          path="/contact-us"
          element={
            <ProtectedRoute>
              <Suspense fallback={loadingComponent}>
                <ContactUs />
              </Suspense>
            </ProtectedRoute>
          }
        />
        <Route
          path="/movie-favourite"
          element={
            <ProtectedRoute>
              <Suspense fallback={loadingComponent}>
                <FavouriteMovies />
              </Suspense>
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/about-us"
          element={
            <ProtectedRoute>
              {" "}
              <Suspense fallback={loadingComponent}>
                <AboutUs />
              </Suspense>
            </ProtectedRoute>
          }
        />
      </Route>
      <Route
        path="/movie-search/:name"
        element={
          <ProtectedRoute>
            {" "}
            <Suspense fallback={loadingComponent}>
              <Search />
            </Suspense>
          </ProtectedRoute>
        }
      />
      <Route
        path="/auth"
        element={
          <Suspense fallback={loadingComponent}>
            <FormLogin />
            {/* {isUserLogin ? <NavLayout></NavLayout> : <FormLogin />} */}
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
