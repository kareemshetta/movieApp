import Accordion from "../movieCard/accordion/Accordion";

export default function SearchCard({ movie }) {
  console.log("vdsvs", movie);
  return (
    <div className="movie h-100 my-5  ">
      <div className="row g-3 rounded-lg shadow-lg">
        <div className="col-12 col-md-4">
          <img
            width={"100%"}
            height={"100%"}
            src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
            alt=""
            className="rounded"
          />
        </div>
        <div className="col-12 col-md-8">
          <div className="d-flex align-items-center justify-content-between">
            <h4 className=" badge bg-primary fs-16">{movie.title}</h4>

            <p
              className={` badge rounded-pill ${
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
          <p className=" bg-light p-4 rounded ">{movie.overview}</p>
          <Accordion movie={movie}></Accordion>
        </div>
      </div>
    </div>
  );
}
