import { useState } from "react";
import LanguageContext from "../../../context/languageContext";
import { useContext } from "react";
export default function Accordion({ movie }) {
  console.log(movie);
  const [activeIndex, setActiveIndex] = useState(0);
  const { lang, setLang } = useContext(LanguageContext);

  const handleAccordionClick = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  return (
    <div className="accordion my-2" id="accordionExample">
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button
            className={`accordion-button ${
              activeIndex === 0 ? "" : "collapsed"
            }`}
            type="button"
            onClick={() => handleAccordionClick(0)}
            aria-expanded={activeIndex === 0}
            aria-controls="collapseOne"
          >
            {lang === "ar" ? "الشركــات المنتجــة " : "Production Companies"}
          </button>
        </h2>
        <div
          id="collapseOne"
          className={`accordion-collapse collapse ${
            activeIndex === 0 ? "show" : ""
          }`}
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <strong className="d-block">
              {lang === "ar"
                ? "الشركــات المنتجــة للفيلـم"
                : "Companies that product this movie"}
            </strong>
            {movie.production_companies.map((company) => {
              return (
                <div className="image" key={company.id}>
                  <p className=" badge bg-dark">{company.name}</p>
                  {/* {company.logo_path == null ? (
                    <></>
                  ) : (
                    <img
                      width={"400px"}
                      height={"100px"}
                      src={`https://image.tmdb.org/t/p/w500/${company.logo_path}`}
                      alt="no image provided"
                    />
                  )} */}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingThree">
          <button
            className={`accordion-button ${
              activeIndex === 2 ? "" : "collapsed"
            }`}
            type="button"
            onClick={() => handleAccordionClick(2)}
            aria-expanded={activeIndex === 2}
            aria-controls="collapseThree"
          >
            {lang === "ar" ? "نوعـية الفيلم" : "Film Genres"}
          </button>
        </h2>
        <div
          id="collapseThree"
          className={`accordion-collapse collapse ${
            activeIndex === 2 ? "show" : ""
          }`}
          aria-labelledby="headingThree"
          data-bs-parent="#accordionExample"
        >
          {movie.genres.map((genre) => {
            return (
              <div className="d-inline-block m-2 " key={genre.id}>
                <span
                  className={`badge ${
                    genre.name == "Drama"
                      ? "bg-success"
                      : genre.name == "War"
                      ? "bg-danger"
                      : genre.name == "Action"
                      ? "bg-warning"
                      : genre.name == "Adventure"
                      ? "bg-dark"
                      : genre.name == "Science Fiction"
                      ? "bg-primary"
                      : "bg-info"
                  }`}
                >
                  {genre.name}
                </span>
                {/* {company.logo_path == null ? (
                    <></>
                  ) : (
                    <img
                      width={"400px"}
                      height={"100px"}
                      src={`https://image.tmdb.org/t/p/w500/${company.logo_path}`}
                      alt="no image provided"
                    />
                  )} */}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
