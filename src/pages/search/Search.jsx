import React from "react";

import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { useContext } from "react";
import LanguageContext from "../../context/languageContext";
import MovieCard from "../../component/movieCard/MovieCard";
export default function Search() {
  const [movies, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = useState("");
  const params = useParams();
  const { lang, setLang } = useContext(LanguageContext);

  const changeHandler = (e) => {
    setValue(e.target.value);
  };

  const getMovies = (movieName, index) => {
    setIsLoading(true);
    console.log(params.name);
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?language=${
          lang == "en" ? "en-US" : "ar"
        }&api_key=0f2fa3f84537ad4b53c9e3c913d2e012&query=${movieName}&page=${index}`
      )
      .then((res) => {
        console.log(`movie data`, res.data);
        setMovie(res.data.results);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getMovies(params.name, 1);
  }, []);

  return (
    <div className="container mt-4 ">
      <div className="input-group mb-5 m-width-500 ">
        <button
          style={{
            borderTopLeftRadius: "20px",
            borderBottomLeftRadius: "20px",
          }}
          onClick={() => {
            getMovies(value, 1);
            setValue("");
          }}
          className="btn btn-primary b"
          type="button"
          id="button-addon1"
        >
          Search
        </button>
        <input
          style={{
            borderTopRightRadius: "20px",
            borderBottomRightRadius: "20px",
          }}
          value={value}
          onChange={(e) => {
            changeHandler(e);
            console.log(value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              getMovies(value, 1);
              setValue("");
            }
          }}
          type="text"
          className="form-control"
          placeholder="Search Film"
          aria-label="Example text with button addon"
          aria-describedby="button-addon1"
        />
      </div>
      {/* <div
        className={`${
          movies.length < 1 ? "d-none" : ""
        } badge bg-success p-2 mb-2`}
      >{`Search Result:${movies.length}`}</div> */}
      <div className="row gapp justify-content-center">
        {isLoading ? (
          <div style={{ width: "50px", height: "50px" }}>
            <i className="fa-solid fa-spinner fa-spin text-primary fa-3x"></i>
          </div>
        ) : movies.length < 1 ? (
          <div className="alert alert-info">No Movies Found</div>
        ) : (
          movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id}></MovieCard>
          ))
        )}
      </div>
    </div>
  );
}
