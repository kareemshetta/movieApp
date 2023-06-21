import { configureStore } from "@reduxjs/toolkit";
import FavouriteSlice from "./slices/FavouriteSlice";
import AuthSlice from "./slices/AuthSlice";
export default configureStore({
  reducer: {
    favourite: FavouriteSlice,
    auth: AuthSlice,
  },
});
