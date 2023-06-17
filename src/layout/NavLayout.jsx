import React from "react";
import { Outlet } from "react-router-dom";
import { useContext } from "react";
import Header from "../shared/header/Header";
import LanguageContext from "../context/languageContext";
export default function NavLayout() {
  const { lang, setLang } = useContext(LanguageContext);

  return (
    <>
      <Header />
      <div
        style={{ marginTop: "100px" }}
        className=" container-fluid  "
        dir={lang === "ar" ? "rtl" : "ltr"}
      >
        <Outlet />
      </div>
    </>
  );
}
