import React, { useState } from "react";
import logo from "./logonew.png";
import "./Login.css";
import { Form, FormGroup, Button, Label, Input } from "reactstrap";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationschema = Yup.object().shape({
  Email: Yup.string().email().required("enter the valid email"),
  Password: Yup.string()
    .min(8, "Must be at least 8 chars!")
    .required("password is required  "),
});

const Login = () => {
  const [showpassword, setShowpassword] = useState(false);
  const { values, errors, handleBlur, handleSubmit, handleChange, touched } =
    useFormik({
      initialValues: {
        Email: "",
        Password: "",
      },
      validationSchema: validationschema,
      onSubmit: (values) => {
        console.log(values);
      },
    });
  return (
    <>
      <div className="maincontainer container-fluid overflow-hidden d-flex flex-column justify-content-start justify-content-sm-center ">
        <div className="row">
          <div
            className=" backimage d-none d-lg-flex col-lg-6 d-flex flex-column justify-content-center align-items-center img-fluid  "
            style={{ minHeight: "100vh" }}
          >
            <div className=" bgdiv    w-75 h-75 d-flex flex-column d-flex justify-content-center  align-items-center">
              <h1 className="pb-5 text-white bgheading">
                <i className  ="fa-solid fa-play"></i> Digital
                <br />
                Platform
                <br />
                for distance
                <br />
                <span className=" text-black"> learning</span>
              </h1>
              <h3 className="text-white bgsubheading">
                You will never know everything <br />
                But you will know more
              </h3>
            </div>
          </div>

          <div className="check col-12  col-lg-6    d-flex  flex-column  justify-content-center align-items-center   p-0 pt-5  p-sm-5">
            <div className="container     p-sm-5">
              <img className="img-fluid pb-2 pb-lg-5 " src={logo} />
              <h1 className="logoheading">
                Hey, hello <i class="fa-solid fa-hand"></i>
              </h1>
              <h5 className="pb-2 pb-lg-4 logosubheading  ">
                Enter the Information You entered while registering
              </h5>

              <Form onSubmit={handleSubmit}>
                <FormGroup>
                  <Label for="exampleEmail">Email</Label>

                  <Input
                    value={values.Name}
                    className="logoformheight"
                    id="exampleEmail"
                    name="Email"
                    type="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.Email && touched.Email && (
                    <div className="text-danger d-block ">{errors.Email}</div>
                  )}
                </FormGroup>
                <FormGroup>
                  <Label for="examplePassword">Password</Label>
                  <div className=" position-relative">
                    <Input
                      value={values.Password}
                      className="logoformheight"
                      id="examplePassword"
                      name="Password"
                      type={showpassword ? "text" : "password"}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <span onClick={() => setShowpassword((prev) => !prev)}>
                      {" "}
                      <i
                        className={` fa-solid ${
                          showpassword ? "fa-eye" : "fa-eye-slash"
                        } position-absolute `}
                        style={{
                          bottom: "10px",
                          right: "10px",
                          cursor: "pointer",
                        }}
                      ></i>
                    </span>
                  </div>
                  {errors.Password && touched.Password && (
                    <div className="text-danger d-block ">
                      {errors.Password}
                    </div>
                  )}
                </FormGroup>
                <div className="d-flex justify-content-between mt-2">
                  <FormGroup check>
                    <Input type="checkbox" /> <Label check>Remember me </Label>
                  </FormGroup>
                  <p>Forget Password</p>
                </div>
                <Button
                  type="submit"
                  onClick={() => {
                    console.log("click");
                  }}
                  className="bgdiv btn w-100  border-0"
                >
                  Login
                </Button>
                <div className="row mt-2">
                  <div className="col-5 ">
                    {" "}
                    <hr />{" "}
                  </div>
                  <div className="col text-center ">or </div>
                  <div className="col-5">
                    <hr />
                  </div>
                </div>
                <Button className="bgdiv btn w-100 btn-primary  mt-2 border-0">
                  <i className="fa-brands fa-google"></i> Sign in with Google
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
