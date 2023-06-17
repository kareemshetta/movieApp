const { createSlice } = require("@reduxjs/toolkit");

const INITIAL_STATE = {
  favouriteMovies: [],
};

const favouriteSlice = createSlice({
  name: "favourite",
  initialState: INITIAL_STATE,
  reducers: {
    removeMovieFromFav: (state, action) => {
      state.favouriteMovies = state.favouriteMovies.filter((movie) => {
        return movie.id != action.payload.id;
      });

      //= action.payload;
    },
    addMovieFromFav: (state, action) => {
      state.favouriteMovies.push(action.payload);
    },
  },
});

export const { removeMovieFromFav, addMovieFromFav } = favouriteSlice.actions;

export default favouriteSlice.reducer;
