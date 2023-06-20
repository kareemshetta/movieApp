// console.log("API KEY", process.env.REACT_APP_API_KEY);

import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "https://identitytoolkit.googleapis.com/v1",
  params: {
    key: "AIzaSyBjrnFEQB_8236LqeTyRLJZsbq11Hoq1lU",
  },
});

//signUp?key=[API_KEY]
//signInWithPassword?key=[API_KEY]
export default axiosInstance;
