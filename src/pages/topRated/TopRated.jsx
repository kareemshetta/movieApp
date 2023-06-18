import React, { useContext, useEffect, useState } from "react";
import axiosInstance from "../../api/AxiosHelper";
import LanguageContext from "../../context/languageContext";

import MovieCard from "../../component/movieCard/MovieCard";

let index = 1;
export default function TopRatedMovies() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { lang, setLang } = useContext(LanguageContext);
  const loadMoreMovies = () => {
    console.log("hi");
    index++;
    setIsLoading(true);
    axiosInstance
      .get(
        `/top_rated?language=${lang == "en" ? "en-US" : "ar"}&page=${index}`
        // {
        //   params: {
        //     name: "test",
        //   },
        // }
      )
      .then((res) => {
        setMovies([...movies, ...res.data.results]);
        setIsLoading(false);
        // console.log(res.data.results);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    setIsLoading(true);
    console.log("hi");
    axiosInstance
      .get(
        `/top_rated?language=${lang == "en" ? "en-US" : "ar"}&page=1`
        // {
        //   params: {
        //     name: "test",
        //   },
        // }
      )
      .then((res) => {
        setMovies(res.data.results);
        setIsLoading(false);
        console.log(res.data.results);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    setIsLoading(true);
    console.log("hi");
    axiosInstance
      .get(
        `/top_rated?language=${lang == "en" ? "en-US" : "ar"}&page=1`
        // {
        //   params: {
        //     name: "test",
        //   },
        // }
      )
      .then((res) => {
        setMovies(res.data.results);
        setIsLoading(false);
        console.log(res.data.results);
      })
      .catch((error) => console.log(error));
  }, [lang]);

  return (
    <div className="row justify-content-center align-items-center gapp my-2">
      {movies.length < 1 ? (
        <div style={{ width: "50px", height: "50px" }}>
          <i className="fa-solid fa-spinner fa-spin text-primary fa-3x"></i>
        </div>
      ) : (
        <>
          {movies.map((movie, index) => {
            return <MovieCard movie={movie} key={movie.id}></MovieCard>;
          })}

          <div className="text-center">
            <button
              className="btn btn-outline-primary   d-inline-block  "
              onClick={() => {
                loadMoreMovies();
              }}
            >
              {isLoading ? (
                <i className="fa-solid fa-spinner fa-spin text-white fa-2x"></i>
              ) : (
                `${lang === "ar" ? "تحمـيل المزيد" : "load more"}`
              )}
            </button>
          </div>
        </>
      )}
      <div
        onClick={() => {
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        }}
        className=" bg-primary  position-100vh rounded"
      >
        <i className="fa-solid text-white fa-arrow-up fa-bounce fa-2xl"></i>
      </div>
    </div>
  );
}
