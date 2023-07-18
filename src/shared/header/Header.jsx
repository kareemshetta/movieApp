import React, { useState } from "react";
import { Link, NavLink, useLocation, useMatch } from "react-router-dom";
import { useRef } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { logOut } from "../../store/slices/AuthSlice";
import { useDispatch } from "react-redux";
import LanguageContext from "../../context/languageContext";
import "./Header.css";
import LogoutModal from "../../component/logoutModal/LogoutModal";
export default function Header() {
  const favouriteList = useSelector((state) => state.favourite.favouriteMovies);
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const [islogout, setLogout] = useState(false);
  const { lang, setLang } = useContext(LanguageContext);
  const inputRef = useRef(null);
  const homeMatch = useMatch("/movies");
  const mainMatch = useMatch("/home-movies");
  const topRatedMatch = useMatch("/top-rated-movies");
  const upcomingMatch = useMatch("/upcoming-movies");
  // const aboutMatch = useMatch("/about-us");
  const favouriteMatch = useMatch("/movie-favourite");
  // const contactMatch = useMatch("/contact-us");
  const navigate = useNavigate();

  const goToSearch = (movie) => {
    navigate(
      `/movie-search/${movie}`
      // {
      //   state: {
      //     test: "1",
      //   },
      // }
    );
  };
  const getSearchValue = (searchValue) => {
    setValue(searchValue);
    console.log(value);
  };

  const showModal = (value) => {
    setLogout(value);
  };
  return (
    <div>
      {islogout && (
        <LogoutModal
          title="Are You Sure ?"
          message=""
          onLogout={() => {
            console.log("ia m called");
            dispatch(logOut());
            navigate("/auth");
          }}
          onCancel={showModal}
        ></LogoutModal>
      )}

      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top p-2 shadow fixed-height "
        dir={lang === "ar" ? "rtl" : "ltr"}
      >
        <div className="container-fluid d-flex align-items-center ">
          <Link className="navbar-brand mx-2 title" to="/home-movies">
            <i className="fas fa-film text-info mx-1"></i>
            {lang === "ar" ? " شـــــاهد" : "Watch"}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul
              className={`navbar-nav ${
                lang == "ar" ? "ms-auto" : "me-auto"
              } mb-2 mb-lg-0`}
            >
              <li className="nav-item">
                <NavLink
                  className={`nav-link ${mainMatch?.isExact ? "active " : ""}`}
                  aria-current="page"
                  to="/home-movies"
                >
                  {lang === "ar" ? "الرئيسية" : "Home"}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={`nav-link ${homeMatch?.isExact ? "active " : ""}`}
                  aria-current="page"
                  to="movie"
                >
                  {lang === "ar" ? " الافلام المشهورة" : "Popular Movies"}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={`nav-link ${
                    topRatedMatch?.isExact ? "active " : ""
                  }`}
                  aria-current="page"
                  to="top-rated-movie"
                >
                  {lang === "ar" ? " الافلام الأعلي تقيماً" : "Top Rated "}
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className={`nav-link ${
                    upcomingMatch?.isExact ? "active " : ""
                  }`}
                  aria-current="page"
                  to="upcoming-movie"
                >
                  {lang === "ar" ? "الافلام القادمة" : "Upcoming Movies"}
                </NavLink>
              </li>
              <li className="nav-item position-relative">
                <NavLink
                  className={`nav-link ${
                    favouriteMatch?.isExact ? "active" : ""
                  }`}
                  aria-current="page"
                  to="movie-favourite"
                >
                  {lang === "ar" ? "المفضــلة" : "Favourite"}
                </NavLink>

                <p
                  className={`position-absolute top--5 ${
                    lang === "ar" ? "start-0" : "end-0"
                  } badge bg-warning fs-10`}
                >
                  {favouriteList.length}
                </p>
              </li>
              {/* <li className="nav-item">
            <NavLink
              className={`nav-link ${contactMatch?.isExact ? "active" : ""}`}
              aria-current="page"
              to="contact-us"
            >
              {lang === "ar" ? " تواصـل معنـا" : "Contact Us"}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={`nav-link ${aboutMatch?.isExact ? "active" : ""}`}
              aria-current="page"
              to="about-us"
            >
              {lang === "ar" ? "من نحــن" : "About Us"}
            </NavLink>
          </li> */}

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {lang === "ar" ? "اللــغة" : "language"}
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li className="pointer">
                    <a
                      className="dropdown-item"
                      onClick={() => {
                        setLang("ar");
                      }}
                    >
                      Arabic
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li className="pointer">
                    <a
                      className="dropdown-item"
                      onClick={() => {
                        setLang("en");
                      }}
                    >
                      English
                    </a>
                  </li>
                </ul>
              </li>
            </ul>

            <div className="d-flex align-items-center g-2">
              <input
                ref={inputRef}
                className="form-control mx-2 "
                type="search"
                onChange={(e) => {
                  getSearchValue(e.target.value);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    console.log(inputRef.current.value);
                    goToSearch(value);
                    inputRef.current.value = "";
                  }
                }}
                placeholder={`${lang === "ar" ? "ابحــث" : "Search"}`}
                aria-label="Search"
              />
              <button
                className={`btn btn-outline-primary ${
                  lang === "ar" ? "text-right" : "text-left"
                } my-sm-0`}
                onClick={() => {
                  console.log(inputRef.current.value);
                  goToSearch(value);
                  inputRef.current.value = "";
                }}
              >
                Search
              </button>
              <span
                onClick={() => {
                  // console.log("vgvggg");
                  console.log("hello from log out ");
                  showModal(true);
                }}
                className="text-white pointer mx-1 logout "
              >
                {lang === "ar" ? "تسجيل الخروج" : " logOut"}
              </span>
              <small className=" d-flex mx-1 text-white badge bg-primary">
                {lang.toUpperCase()}
              </small>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
