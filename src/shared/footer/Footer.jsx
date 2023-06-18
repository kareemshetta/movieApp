import React from "react";
import { useContext } from "react";
import LanguageContext from "../../context/languageContext";
import "./Footer.css";
export default function Footer() {
  const { lang, setLang } = useContext(LanguageContext);
  return (
    <footer className="site-footer p-4 position-relative top-100 backg-body text-light">
      <div className="container ">
        <div className="row">
          <div className="col-12 col-md-6">
            <h6>{lang === "ar" ? "من نحــن" : "About"}</h6>
            <p className="text-justify">
              <i className="fas fa-film text-info mx-1"> </i>
              <span className="bold">
                {lang === "ar" ? " شــــاهد" : "Watch"}
              </span>

              {lang === "ar"
                ? `
                موقع شامل يهدف إلى خدمة هواة الأفلام عن طريق توفير سهولة الوصول إلى معلومات حول الأفلام القيمة والشائعة والقادمة، بالإضافة إلى خاصية البحث وخيارات تصفية اللغة`
                : ` is a comprehensive website that caters to movie enthusiasts by
              providing them with easy access to information on top-rated,
              popular, and upcoming movies, as well as a search functionality
              and language filtering options.`}
            </p>
          </div>

          <div className="col-6 col-md-3">
            <h6> {lang === "ar" ? " التصنيفات" : "Categories"}</h6>
            <ul className="footer-links">
              <li>
                <i className="fas fa-angle-double-right text-primary me-1"></i>
                {lang === "ar" ? " الاعلي تقيـماً" : "Top Rated"}
              </li>
              <li>
                <i className="fas fa-angle-double-right text-primary me-1"></i>
                {lang === "ar" ? "المشــهورة" : "Popular"}
              </li>
              <li>
                <i className="fas fa-angle-double-right text-primary me-1"></i>
                {lang === "ar" ? "القادمـة" : "Upcoming"}
              </li>
              <li>
                <i className="fas fa-angle-double-right text-primary me-1"></i>
                {lang === "ar" ? "المعروضـة الأن" : " Now Playing"}
              </li>
            </ul>
          </div>

          <div className="col-6 col-md-3">
            <h6></h6>
            <ul className="footer-links">
              <li>
                <i
                  className={`${
                    lang === "ar" ? "ms-2" : " me-2"
                  } fas fa-mobile-alt  `}
                ></i>
                +20 01027465358
              </li>
              <li className="text-truncate">
                <i
                  className={`${
                    lang === "ar" ? "ms-2" : " me-2"
                  } fas fa-envelope `}
                ></i>
                kareemshetta8@gmail.com
              </li>
              <ul className="footer-links text-start">
                <hr className="border-top border-primary"></hr>
                <li>
                  <ul className="social-icons">
                    <li>
                      <a
                        className="facebook"
                        target="_blank"
                        href="https://www.facebook.com/karim.sheta.58"
                      >
                        <i className="fab fa-facebook"></i>
                      </a>
                    </li>

                    <li>
                      <a
                        target="_blank"
                        className="linkedin"
                        href="https://www.linkedin.com/in/kareem-shetta-446476254"
                      >
                        <i className="fab fa-linkedin"></i>
                      </a>
                    </li>
                    <li className="">
                      <a
                        target="_blank"
                        className="github"
                        href="https://github.com/kareemshetta"
                      >
                        <i className="fab fa-github fa-1x"></i>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </ul>
          </div>
        </div>
        <hr />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-6 col-12">
            <p className="copyright-text">
              {lang === "ar" ? "حقـوف الملكيـة" : `Copyright`} &copy;
              {lang === "ar"
                ? "  جميع الحقوق محفوظة الي  "
                : " 2023 All Rights Reserved to "}
              <strong>
                {" "}
                <i className="fas fa-film text-info mx-1"> </i>{" "}
                {lang === "ar" ? "شــاهد" : `Watch App `}{" "}
              </strong>
              .
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-12"></div>
        </div>
      </div>
    </footer>
  );
}

// <i class="fas fa-mobile-alt me-2"></i>
//<i class="fas fa-envelope me-2 text-truncate"></i>
