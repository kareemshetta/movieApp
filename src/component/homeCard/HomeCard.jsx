import React from "react";

export default function HomeCard({ movie, goToDetailsHandler }) {
  return (
    <div
      onClick={() => {
        goToDetailsHandler(movie);
      }}
      className=" col-12 col-md-5 col-lg-2 mt-3  pointer rounded d-flex align-items-center justify-content-center position-relative"
      key={movie.id}
      style={{
        height: "250px",
        backgroundImage: `url("https://image.tmdb.org/t/p/w500/${movie.backdrop_path}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <p className="bg-trans">{movie.title}</p>
      <p
        style={{ top: "3px", right: "3px" }}
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
        {movie.vote_average.toFixed(2)}
      </p>
    </div>
  );
}
