import React from "react";
import logo from "./logonew.png";
import bglogo from "./backgroundlogin.jpg";
import  './Login.css'
// import './index.css'
import {
  Col,
  Container,
  Row,
  Form,
  FormGroup,
  Button,
  Card,
  Label,
  Input,
} from "reactstrap";

const Login = () => {
  return (
    <>
      <div
        className="maincontainer container-fluid overflow-hidden d-flex flex-column justify-content-start justify-content-sm-center "
        style={{ minHeight: "100vh" }}
      >
        <div className="row">
          <div
            className="d-none d-lg-flex col-lg-6 d-flex flex-column justify-content-center align-items-center img-fluid  "
            style={{
              backgroundImage: `url(${bglogo})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              minHeight: "100vh",
              backgroundRepeat: "no-repeat",
              objectFit: "cover",
            }}
          >
            <div
              className="     w-75 h-75 d-flex flex-column d-flex justify-content-center  align-items-center"
              style={{
                backgroundImage:
                  //   "linear-gradient(135deg, #92FFC0 10%, #002661 100%)",
                  " linear-gradient(135deg, #09C6F9 10%, #045DE9 100%)",
              }}
            >
              <h1
                className="pb-5 text-white"
                style={{
                  //   paddingLeft: "4rem",
                  //   fontSize: "clamp(4.0625rem, 3.1971rem + 1.1538vw, 5rem)",
                  fontSize: "clamp(3rem, 0.815rem + 3.5242vw, 5rem)",
                  LineHeight: "1.1",
                }}
              >
                <i class="fa-solid fa-play"></i> Digital
                <br />
                Platform
                <br />
                for distance
                <br />
                <span className=" text-black"> learning</span>
              </h1>
              <h3
                className="text-white "
                style={{
                  //   paddingLeft: "4rem",
                  //   fontSize: "clamp(1.5rem, 1.0385rem + 0.6154vw, 2rem)",
                  fontSize: "clamp(1.2rem, 0.326rem + 1.4097vw, 2rem)",
                }}
              >
                You will never know everything <br />
                But you will know more
              </h3>
            </div>
          </div>

          <div className="check col-12  col-lg-6    d-flex  flex-column  justify-content-center align-items-center   p-0 pt-5  p-sm-5">
            <div className="container     p-sm-5">
              <img className="img-fluid pb-2 pb-lg-5 " src={logo} />
              <h1
                style={{
                  fontSize: "clamp(1.5rem, 1.4266rem + 0.367vw, 2rem)",
                  fontWeight: 700,
                }}
              >
                Hey, hello <i class="fa-solid fa-hand"></i>
              </h1>
              <h5
                className="pb-2 pb-lg-4  "
                style={{
                  fontSize:"clamp(0.75rem, 0.6741rem + 0.3797vw, 1.125rem)",
                  color: "#AAABB0",
                  fontWeight: 500,
                }}
              >
                Enter the Information You entered while registering
              </h5>

              <Form>
                <FormGroup>
                  <Label for="exampleEmail">Email</Label>
                  <Input
                    style={{ height: "40px" }}
                    id="exampleEmail"
                    name="email"
                    // placeholder="with a placeholder"
                    type="email"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="examplePassword">Password</Label>
                  <Input
                    style={{ height: "40px" }}
                    id="examplePassword"
                    name="password"
                    // placeholder="password placeholder"
                    type="password"
                  />
                </FormGroup>
                <div className="d-flex justify-content-between mt-2">
                  <FormGroup check>
                    <Input type="checkbox" /> <Label check>Remember me </Label>
                  </FormGroup>
                  <p>Forget Password</p>
                </div>
                <Button
                  className="btn w-100 "
                  style={{
                    backgroundImage:
                      " linear-gradient(135deg, #09C6F9 10%, #045DE9 100%)",
                    //   "linear-gradient(135deg, #92FFC0 10%, #002661 100%)",
                    border: "none",
                  }}
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
                <Button
                  className="btn w-100 btn-primary  mt-2"
                  style={{
                    backgroundImage:
                      " linear-gradient(135deg, #09C6F9 10%, #045DE9 100%)",
                    //   "linear-gradient(135deg, #92FFC0 10%, #002661 100%)",

                    border: "none",
                  }}
                >
                  <i class="fa-brands fa-google"></i> Sign in with Google
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
