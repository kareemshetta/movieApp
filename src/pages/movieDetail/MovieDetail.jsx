import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import LanguageContext from "../../context/languageContext";
import axiosInstance from "../../api/AxiosHelper";
import SearchCard from "../../component/searchCard/SearchCard";

export default function MovieDetail() {
  const [movieDetails, setMovieDetails] = useState({});
  const params = useParams();
  const { lang, setLang } = useContext(LanguageContext);
  useEffect(() => {
    axiosInstance
      .get(`/${params.id}?language=${lang == "en" ? "en-US" : "ar"}`)
      .then((res) => {
        console.log(`movie data`, res.data);
        setMovieDetails(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {}, [lang]);

  return (
    <>
      {movieDetails.id == undefined ? (
        <div
          className=" mx-auto text-center"
          style={{ width: "50px", height: "50px" }}
        >
          <i className="fa-solid fa-spinner fa-spin text-primary fa-3x"></i>
        </div>
      ) : (
        <div className="container">
          <SearchCard movie={movieDetails}></SearchCard>
        </div>
      )}
    </>
  );

  // return (
  //   <div
  //     className="card m-auto "
  //     style={{ width: "70%", borderRadius: "10px" }}
  //   >
  //     <Image
  //       // fadeIn={true}
  //       // delay={1}
  //       className="card-img-top "
  //       src={`https://image.tmdb.org/t/p/original/${movieDetails.backdrop_path}`}
  //       fallback={<Shimmer duration={1} width={600} height={400} />}
  //     />
  //     <div className="card-body ">
  //       <div className="d-flex justify-content-between align-items-center">
  //         <h5 className="card-title badge bg-primary fs-5">
  //           {movieDetails.title}
  //         </h5>
  //         <span className="badge bg-success font-monospace  ">
  //           rate : {movieDetails.vote_average}
  //         </span>
  //       </div>
  //       <p className="card-text bg-light p-1 rounded border border-2">
  //         {movieDetails.overview}
  //       </p>
  //     </div>
  //   </div>
  // );
}
