import { configureStore } from "@reduxjs/toolkit";
import FavouriteSlice from "./slices/FavouriteSlice";

export default configureStore({
  reducer: {
    favourite: FavouriteSlice,
  },
});
