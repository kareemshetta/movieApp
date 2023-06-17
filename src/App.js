import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/AppRouter";
import { useState } from "react";
import LanguageContext from "./context/languageContext";
function App() {
  const [lang, setLang] = useState("en");
  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </LanguageContext.Provider>
  );
}

export default App;
//0f2fa3f84537ad4b53c9e3c913d2e012
