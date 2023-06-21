import axiosInstance from "../../api/AuthHelper";
const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const INITIAL_STATE = {
  status: "idle",
  user: {},
  error: null,
  isLoginUser: false,
};

export const signUpUserByEmailAndPassword = createAsyncThunk(
  "auth/register",
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await axiosInstance.post("accounts:signUp", {
        email: email,
        password: password,
        returnSecureToken: true,
      });
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const signInUserByEmailAndPassword = createAsyncThunk(
  "auth/signIn",
  async ({ email, password }, thunkAPI) => {
    console.log(email, password);
    try {
      const response = await axiosInstance.post("accounts:signInWithPassword", {
        email: email,
        password: password,
        returnSecureToken: true,
      });
      console.log(response);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

const AuthSlice = createSlice({
  name: "auth",
  initialState: INITIAL_STATE,
  reducers: {
    logOut: (state, action) => {
      localStorage.removeItem("accessToken");
      state.isLoginUser = false;
      state.status = "idle";
      state.user = {};
      state.error = null;
    },
    checkLogin: (state, action) => {
      console.log("check login");
      let token = localStorage.getItem("accessToken");
      console.log(token);
      if (token) {
        state.isLoginUser = true;
      } else {
        state.isLoginUser = false;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signUpUserByEmailAndPassword.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(signUpUserByEmailAndPassword.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.user = action.payload;
    });
    builder.addCase(signUpUserByEmailAndPassword.rejected, (state, action) => {
      state.status = "failed";

      state.error = {
        message: action.payload.response.data.error.message,
        code: action.payload.response.data.error.code,
      };
    });

    builder.addCase(signInUserByEmailAndPassword.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(signInUserByEmailAndPassword.fulfilled, (state, action) => {
      localStorage.setItem("accessToken", action.payload.idToken);
      state.status = "succeeded";
      state.isLoginUser = true;
      state.user = action.payload;
    });
    builder.addCase(signInUserByEmailAndPassword.rejected, (state, action) => {
      state.status = "failed";
      state.error = {
        message: action.payload.response.data.error.message,
        code: action.payload.response.data.error.code,
      };
    });
  },
});

export const getUserData = (state) => state.auth.user;
export const getUserStatus = (state) => state.auth.status;
export const getUsererror = (state) => state.auth.error;
export const isLoginUser = (state) => state.auth.isLoginUser;

export const { checkLogin, logOut } = AuthSlice.actions;

export default AuthSlice.reducer;

// console.log(
//   action.error,
//   action.meta,
//   action.payload.response.data.error
// );
// state.error = action.error;
// payload.response.data.error.message;
