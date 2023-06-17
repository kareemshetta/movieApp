import React from "react";
import { useState } from "react";
export default function FormLogin() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userName, setUserName] = useState("");

  const [userNameErr, setUserNameErr] = useState("");
  const [nameErr, setNameErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [confirmPasswordErr, setComfirmPasswordErr] = useState("");
  const [emailErr, setErrEmail] = useState("");

  // const [gameForm, setGameForm] = useState({
  //   name : "",
  //   overview: ""
  // })

  const handleChange = (e) => {
    console.log(e.target.value, e.target.id);
    if (e.target.id === "name") {
      setName(e.target.value);
      setNameErr(
        e.target.value.length === 0
          ? "This field is required"
          : e.target.value.length < 3
          ? "Min. Length is 3 characters"
          : null
      );

      // setGameForm({
      //   ...GameForm,
      //   name : e.target.value
      // })
    }

    if (e.target.id === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setEmail(e.target.value);
      setErrEmail(
        e.target.value.length === 0
          ? "This field is required"
          : e.target.value.match(emailRegex)
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

  // : e.target.value.length > 200
  // ? "Max. Length is 200 characters"

  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log({
      name,
      email,
    });
  };

  return (
    <div className="container bg-light mt-5 p-4 rounded">
      <form onSubmit={handleSubmitForm}>
        <p className="bg-info p-2 d-inline-block rounded">add New User</p>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Please add a game name"
            value={email}
            onChange={(e) => handleChange(e)}
          />
          {emailErr && <small className="text-danger">{emailErr}</small>}
        </div>

        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Please add  name"
            value={name}
            onChange={(e) => handleChange(e)}
          />
          {nameErr && <small className="text-danger">{nameErr}</small>}
        </div>
        <div className="mb-3">
          <label htmlFor="user-name" className="form-label">
            UserName
          </label>
          <input
            type="text"
            className="form-control"
            id="user-name"
            placeholder="Please add a user name"
            value={userName}
            onChange={(e) => handleChange(e)}
          />
          {userNameErr && <small className="text-danger">{userNameErr}</small>}
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="text"
            className="form-control"
            id="password"
            placeholder="Please add a password"
            value={password}
            onChange={(e) => handleChange(e)}
          />
          {passwordErr && <small className="text-danger">{passwordErr}</small>}
        </div>
        <div className="mb-3">
          <label htmlFor="confirm-password" className="form-label">
            Confirm Password
          </label>
          <input
            type="text"
            className="form-control"
            id="confirm-password"
            placeholder="Please add a password"
            value={confirmPassword}
            onChange={(e) => handleChange(e)}
          />
          {confirmPasswordErr && (
            <small className="text-danger">{confirmPasswordErr}</small>
          )}
        </div>
        <button className="btn btn-primary" type="submit">
          Add User
        </button>
      </form>
    </div>
  );
}
