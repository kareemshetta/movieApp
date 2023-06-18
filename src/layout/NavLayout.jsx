import React from "react";
import { Outlet } from "react-router-dom";
import { useContext } from "react";
import Header from "../shared/header/Header";
import LanguageContext from "../context/languageContext";
import Footer from "../shared/footer/Footer";
export default function NavLayout() {
  const { lang, setLang } = useContext(LanguageContext);

  return (
    <div
      //
      className="position-relative d-flex flex-column justify-content-around"
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      <Header />
      <div style={{ marginTop: "100px", marginBottom: "50px" }}>
        <Outlet />
      </div>
      <Footer></Footer>
    </div>
  );
}
