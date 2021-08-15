import React from "react";
import "../login/login.css";

export const Login = () => {
  return (
    <div>
      <div className="container">
        <div className="mt-5 loginFormHeader">
          <h1>Learnable 20 - Application dashboard</h1>
        </div>
        <div className="loginForm mx-auto mt-5">
          <div className="mb-3 emailDiv">
            <label for="username" className="form-label usernameLabel">
              Username
            </label>
            <input
              type="username"
              className="form-control usernameInput"
              id="usernameInput"
            />
          </div>
          <div className="mb-3 passwordDiv">
            <label
              for="exampleFormControlInput1"
              className="form-label mt-3 passwordLabel"
            >
              Password
            </label>
            <input
              type="password"
              className="form-control passwordInput"
              id="passwordInput"
            />
          </div>
          <div className="d-grid gap-2 col-4 mx-auto">
            <button
              className="btn btn-primary d-md-flex justify-content-between align-items-center mt-3"
              type="button"
            >
              Log In <AiOutlineArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
