import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";

import axiosInstance from "../../api/AxiosHelper";
import LanguageContext from "../../context/languageContext";
import HomeCard from "../../component/homeCard/HomeCard";

import "./Home.css";
export default function Home() {
  const [movies, setMovies] = useState([]);
  const [nowplayingMovies, setNowplayingMovies] = useState([]);
  const [topMovies, setTopMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { lang, setLang } = useContext(LanguageContext);

  const navigate = useNavigate();
  const goToDetails = (movie) => {
    navigate(
      `/movie-details/${movie.id}`
      // {
      //   state: {
      //     test: "1",
      //   },
      // }
    );
  };
  useEffect(() => {
    setIsLoading(true);

    const nowPlayingPromise = axiosInstance.get(
      `/now_playing?language=${lang == "en" ? "en-US" : "ar"}&page=1`
    );
    const upcomingPromise = axiosInstance.get(
      `/upcoming?language=${lang == "en" ? "en-US" : "ar"}&page=1`
    );
    const topRatedPromise = axiosInstance.get(
      `/top_rated?language=${lang == "en" ? "en-US" : "ar"}&page=1`
    );

    const popularPromise = axiosInstance.get(
      `/popular?language=${lang == "en" ? "en-US" : "ar"}&page=1`
    );

    Promise.all([
      popularPromise,
      topRatedPromise,
      nowPlayingPromise,
      upcomingPromise,
    ])
      .then((responses) => {
        setMovies(responses[0].data.results);
        setTopMovies(responses[1].data.results);
        setNowplayingMovies(responses[2].data.results);
        setUpcomingMovies(responses[3].data.results);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    setIsLoading(true);

    const nowPlayingPromise = axiosInstance.get(
      `/now_playing?language=${lang == "en" ? "en-US" : "ar"}&page=1`
    );
    const upcomingPromise = axiosInstance.get(
      `/upcoming?language=${lang == "en" ? "en-US" : "ar"}&page=1`
    );
    const topRatedPromise = axiosInstance.get(
      `/top_rated?language=${lang == "en" ? "en-US" : "ar"}&page=1`
    );

    const popularPromise = axiosInstance.get(
      `/popular?language=${lang == "en" ? "en-US" : "ar"}&page=1`
    );

    Promise.all([
      popularPromise,
      topRatedPromise,
      nowPlayingPromise,
      upcomingPromise,
    ])
      .then((responses) => {
        setMovies(responses[0].data.results);
        setTopMovies(responses[1].data.results);
        setNowplayingMovies(responses[2].data.results);
        setUpcomingMovies(responses[3].data.results);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [lang]);

  return (
    <div className="container py-2">
      {isLoading ? (
        <div
          style={{
            width: "50px",
            height: "50px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <i className="fa-solid fa-spinner fa-spin text-primary fa-3x"></i>
        </div>
      ) : (
        <div className="row sm-gap justify-content-center h-100">
          <div className=" col-12 height-50  d-flex justify-content-center align-items-center ">
            <div
              id="carouselExampleAutoplaying"
              className="carousel slide "
              data-bs-ride="carousel "
            >
              <div className="carousel-inner w-100 ">
                {upcomingMovies.map((movie, index) => {
                  return (
                    <div
                      onClick={() => {
                        goToDetails(movie);
                      }}
                      key={movie.id}
                      className={`${
                        index == 0 ? "active" : ""
                      } carousel-item position-relative`}
                    >
                      <img
                        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                        className="d-block w-100 rounded "
                        style={{ height: "fit-content", objectFit: "cover" }}
                        alt="..."
                      />
                      <p className="position-absolute now-playing">
                        {lang == "ar" ? "يـعرض الأن" : "Now Playing"}
                      </p>
                      <p className="position-absolute p-center">
                        {movie.title}
                      </p>
                    </div>
                  );
                })}
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div className="col-md-5 col-lg-2 bg-light rounded p-2 mt-3">
            <strong>
              {lang === "ar"
                ? "الافلام الاكثر انتشاراً"
                : "Most Popular Movies"}
            </strong>{" "}
            <br />
            {lang === "ar" ? "مشـاهدة سعيدة" : "Happy Watching"}
            <br />
            {lang === "ar" ? "استمتـــع" : "enjoy"}
          </div>
          {movies.slice(11).map((movie) => {
            return (
              <HomeCard
                key={movie.id}
                movie={movie}
                goToDetailsHandler={goToDetails}
              ></HomeCard>
            );
          })}

          <div className="col-md-5 col-lg-2 bg-light rounded p-2 mt-4">
            <strong>
              {lang === "ar" ? "الافلام الاعلي تقيماً" : "Top Rated Movies"}
            </strong>{" "}
            <br />
            {lang === "ar" ? "مشـاهدة سعيدة" : "Happy Watching"}
            <br />
            {lang === "ar" ? "استمتـــع" : "enjoy"}
          </div>
          {topMovies.slice(11).map((movie) => {
            return (
              <HomeCard
                key={movie.id}
                movie={movie}
                goToDetailsHandler={goToDetails}
              ></HomeCard>
            );
          })}

          <div className="col-md-5 col-lg-2  bg-light rounded p-2 mt-4 ">
            <strong>
              {lang === "ar" ? "الافلام القادمة" : "Upcoming  Movies"}
            </strong>{" "}
            <br />
            {lang === "ar" ? "مشـاهدة سعيدة" : "Happy Watching"}
            <br />
            {lang === "ar" ? "استمتـــع" : "enjoy"}
          </div>
          {nowplayingMovies.slice(11).map((movie) => {
            return (
              <HomeCard
                key={movie.id}
                movie={movie}
                goToDetailsHandler={goToDetails}
              ></HomeCard>
            );
          })}
        </div>
      )}
    </div>
  );
}
