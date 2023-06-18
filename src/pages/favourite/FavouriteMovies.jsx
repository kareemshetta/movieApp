import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "../../component/movieCard/MovieCard";
export default function FavouriteMovies() {
  const favouriteList = useSelector((state) => state.favourite.favouriteMovies);

  return (
    <div className="row justify-content-center align-items-center p-4 gapp">
      {favouriteList.length < 1 ? (
        <div className="alert alert-warning p-4 text-center ">
          Opss!!! No Favourite Movies please add some
        </div>
      ) : (
        <>
          {favouriteList.map((movie, index) => {
            return <MovieCard movie={movie} key={movie.id}></MovieCard>;
          })}
        </>
      )}
    </div>
  );
}
