import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  signUpUserByEmailAndPassword,
  signInUserByEmailAndPassword,
  getUserData,
  getUserStatus,
  getUsererror,
  isLoginUser,
  checkLogin,
} from "../../store/slices/AuthSlice";
export default function FormLogin() {
  let isUserLogin = useSelector(isLoginUser);
  let userState = useSelector(getUserStatus);
  let authError = useSelector(getUsererror);
  // let userData = useSelector(getUserData);

  const navigate = useNavigate();
  // const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userName, setUserName] = useState("");

  const [userNameErr, setUserNameErr] = useState("");
  // const [nameErr, setNameErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [confirmPasswordErr, setComfirmPasswordErr] = useState("");
  const [emailErr, setErrEmail] = useState("");

  const userData = useSelector(getUserData);
  const userStatus = useSelector(getUserStatus);
  const userError = useSelector(getUsererror);
  const [isLogin, setIsLogin] = useState(false);
  const dispatch = useDispatch();
  // const [gameForm, setGameForm] = useState({
  //   name : "",
  //   overview: ""
  // })

  const handleChange = (e) => {
    console.log(e.target.value, e.target.id);
    // if (e.target.id === "name") {
    //   setName(e.target.value);
    //   setNameErr(
    //     e.target.value.length === 0
    //       ? "This field is required"
    //       : e.target.value.length < 3
    //       ? "Min. Length is 3 characters"
    //       : null
    //   );

    // setGameForm({
    //   ...GameForm,
    //   name : e.target.value
    // })

    if (e.target.id === "email") {
      const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
      setEmail(e.target.value);
      setErrEmail(
        e.target.value.length === 0
          ? "This field is required"
          : !e.target.value.match(emailRegex)
          ? "write valid email"
          : null
      );
    }
    if (e.target.id === "user-name") {
      setUserName(e.target.value);
      setUserNameErr(
        e.target.value.length === 0
          ? "This field is required"
          : e.target.value.includes(" ")
          ? "remove white spaces"
          : null
      );
    }

    if (e.target.id === "password") {
      const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@*%$#]).{8,}$/;
      setPassword(e.target.value);
      setPasswordErr(
        e.target.value.length === 0
          ? "This field is required"
          : e.target.value.length < 8
          ? "Min. Length is 8 characters"
          : !e.target.value.match(passwordRegex)
          ? "write valid password"
          : null
      );
    }

    if (e.target.id === "confirm-password") {
      setConfirmPassword(e.target.value);
      setComfirmPasswordErr(
        e.target.value.length === 0
          ? "This field is required"
          : e.target.value !== password
          ? "password doesn't match"
          : null
      );
    }
  };

  useEffect(() => {
    dispatch(checkLogin());
    if (isUserLogin) {
      console.log(isLoginUser);
      navigate("/home-movie");
    } else {
      navigate("/auth");
    }
  }, []);

  useEffect(() => {
    if (isUserLogin) {
      navigate("/");
    } else {
      setIsLogin(true);
      {
        navigate("/auth");
      }
    }
  }, [dispatch, userStatus, isLoginUser]);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    // console.log({
    //   name,
    //   email,
    // });
  };

  return (
    <>
      <div className="container align-items-center justify-content-center my-5 rounded border  shadow-lg ">
        <div className="row">
          <div className="col-12 d-none d-lg-block  col-lg-6  d-block">
            <img src="login.jpg" width={"100%"} height={"450px"} alt="" />
          </div>
          <div className="col-12   col-lg-6  p-5 bg-light rounded">
            <a className="navbar-brand mx-5 title" href="#">
              <i className="fas fa-film text-info mx-1"></i>
              Watch
              {/* {lang === "ar" ? " شــــاهد" : "Watch"} */}
            </a>
            <form onSubmit={handleSubmitForm}>
              <div className="mb-3 mt-4 mx-5">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control rounded-5"
                  id="email"
                  placeholder="Enter Your Email"
                  value={email}
                  onChange={(e) => handleChange(e)}
                />
                {emailErr && <small className="text-danger">{emailErr}</small>}
              </div>
              {!isLogin ? (
                <div className="mb-3  mx-5">
                  <label htmlFor="user-name" className="form-label">
                    UserName
                  </label>
                  <input
                    type="text"
                    className="form-control rounded-5"
                    id="user-name"
                    placeholder="Enter Your UserName"
                    value={userName}
                    onChange={(e) => handleChange(e)}
                  />
                  {userNameErr && (
                    <small className="text-danger">{userNameErr}</small>
                  )}
                </div>
              ) : (
                <></>
              )}

              <div className="mb-3 mx-5">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="text"
                  className="form-control rounded-5"
                  id="password"
                  placeholder="Enter Your Password"
                  value={password}
                  onChange={(e) => handleChange(e)}
                />
                {passwordErr && (
                  <small className="text-danger">{passwordErr}</small>
                )}
              </div>
              <div className="mb-3 mx-5">
                <label htmlFor="confirm-password" className="form-label">
                  Confirm Password
                </label>
                <input
                  type="text"
                  className="form-control rounded-5 "
                  id="confirm-password"
                  placeholder="Enter Your Password Again"
                  value={confirmPassword}
                  onChange={(e) => handleChange(e)}
                />
                {confirmPasswordErr && (
                  <small className="text-danger">{confirmPasswordErr}</small>
                )}
              </div>
              {userStatus === "failed" ? (
                <div className=" text-danger px-4 mx-auto text-center bold ">
                  {userError.message}
                </div>
              ) : userStatus === "succeeded" && !isUserLogin ? (
                <div className="text-success px-4 mx-auto text-center  ">
                  successful Register
                </div>
              ) : (
                <></>
              )}
              <div className="btns mx-5">
                <button
                  className="btn btn-primary rounded-5 px-5"
                  type="button"
                  onClick={() => {
                    console.log("email password", password, email);

                    if (email !== "" && password !== "") {
                      {
                        !isLogin
                          ? dispatch(
                              signUpUserByEmailAndPassword({ email, password })
                            )
                          : dispatch(
                              signInUserByEmailAndPassword({ email, password })
                            );
                      }
                    } else {
                      setErrEmail("this field required");
                      setPasswordErr("this field required");
                    }
                  }}
                >
                  {userState === "loading" ? (
                    <i className="fa-solid fa-spinner fa-spin text-white fa-1x mx-2"></i>
                  ) : (
                    <></>
                  )}
                  {isLogin ? "SignIn" : "SignUp"}
                </button>
                <span
                  className="mx-2 text-primary pointer"
                  onClick={() => {
                    setIsLogin(!isLogin);
                  }}
                >
                  {isLogin ? " SignUp " : "LogIn"} instead
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
