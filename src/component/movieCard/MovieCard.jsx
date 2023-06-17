import React from "react";
import "./MovieCard.css";
import { Shimmer, Image } from "react-shimmer";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useContext } from "react";
import LanguageContext from "../../context/languageContext";
import {
  addMovieFromFav,
  removeMovieFromFav,
} from "../../store/slices/FavouriteSlice";

export default function MovieCard({ movie }) {
  const favouriteList = useSelector((state) => state.favourite.favouriteMovies);
  const { lang, setLang } = useContext(LanguageContext);

  // console.log(favouriteList);
  const dispatch = useDispatch();

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

  return (
    <div
      className="card col-12 col-md-6 col-lg-2  p-0  position-relative card-flex "
      style={{ height: "27rem" }}
    >
      <Image
        className="card-img-top"
        src={`${
          movie.backdrop_path === null
            ? "https://placehold.co/600x400/EEE/31343C?font=montserrat&text=No+Film+Image+Provided"
            : `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`
        }`}
        fallback={<Shimmer width={352} height={300} />}
      />

      <div className="card-body">
        <h5 className="card-title">{movie.title}</h5>
        <p className="card-text  small">{movie.overview}</p>
        <div className="d-flex justify-content-between ">
          <button
            className="btn btn-primary "
            onClick={() => {
              goToDetails(movie);
            }}
          >
            {lang === "ar" ? "عـرض التفاصيل" : " Show Details"}
          </button>
          <i
            onClick={() => {
              // favouriteList.includes(movie)
              //   ? dispatch(removeMovieFromFav(movie))
              //   : dispatch(addMovieFromFav(movie));

              const found = favouriteList.find(
                (moviee) => moviee.id == movie.id
              );
              found == undefined
                ? dispatch(addMovieFromFav(movie))
                : dispatch(removeMovieFromFav(movie));
            }}
            className={`${
              favouriteList.includes(movie) ? `fas` : `far`
            } fa-star fa-2x d-inline-block text-warning `}
          ></i>
        </div>
      </div>
      <p
        className={` badge rounded-pill position-absolute top ${
          movie.vote_average < 5
            ? "bg-danger"
            : movie.vote_average > 5 && movie.vote_average < 7
            ? "bg-success"
            : movie.vote_average > 7
            ? "bg-primary"
            : ""
        }`}
      >
        {`${movie.vote_average.toFixed(2)}`}
      </p>
    </div>
  );
}

/* <Shimmer width={500} height={500}>
        <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} />
      </Shimmer> */
