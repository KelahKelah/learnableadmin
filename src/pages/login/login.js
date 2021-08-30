import React from "react";
import "../login/login.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import learnableImage from "../../components/images/learnableImage.svg";
import RequestProcessor from "../../api/requestProcessor";
import * as Yup from "yup";
import { useFormik } from "formik";

const validationSchema = Yup.object().shape({
  username: Yup.string().required("Required Field"),
  password: Yup.string().required("Required Field"),
});

const initialValues = {
  username: "",
  password: "",
};

export const Login = () => {
  const handleFormSubmit = async (values) => {
    console.log("i run here", values);
    const response = await RequestProcessor({
      method: "POST",
      url: "/admin/login",
      payload: values,
    });

    // const response = axios.post("/admin", values);
    console.log(response.result.status, "yuy")
    if (response.result.status) {
      console.log("success");
    } else {
      console.log("error");
    }
  };

  const { handleChange, handleSubmit, values } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: () => handleFormSubmit(values),
  });

  // console.log(values, "fsf")

  return (
    <div
      className="loginContainer"
      style={{
        backgroundImage: `url(${learnableImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#071852",
      }}
    >
      <div className="container">
        <div className="loginFormHeader">
          <h1>
            Learnable <span className="formYear">21</span> - Application
            dashboard
          </h1>
        </div>
        <form className="loginForm mx-auto mt-5">
          <div className="my-4 emailDiv">
            <label htmlFor="username" className="form-label usernameLabel">
              Username
            </label>
            <input
              type="text"
              name="username"
              className="form-control usernameInput"
              id="usernameInput"
              onChange={handleChange}
              value={values.username}
            />
          </div>
          <div className="mb-3 passwordDiv">
            <label
              htmlFor="exampleFormControlInput1"
              className="form-label mt-3 passwordLabel"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              className="form-control passwordInput"
              id="passwordInput"
              value={values.password}
              onChange={handleChange}
            />
          </div>
          <div className="gap-2 col-4 btnDiv">
            <button
              onClick={handleSubmit}
              className="btn btn-primary d-md-flex justify-content-between align-items-center loginBtn"
              type="submit"
            >
              Log In <AiOutlineArrowRight />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
