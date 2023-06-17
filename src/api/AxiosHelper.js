import axios from "axios";
console.log("API KEY", process.env.REACT_APP_API_KEY);
const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie",
  params: {
    api_key: "0f2fa3f84537ad4b53c9e3c913d2e012",
  },
});

// axiosInstance.interceptors.request.use((config) => {
//   const { lang, setLang } = useContext(LanguageContext);

//   config.url = config.url + `?language=${lang == "en" ? "en-US" : "ar"}`;
//   return config;
// });
export default axiosInstance;
