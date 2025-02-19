// import React from 'react'
// import { useFormik } from 'formik'
// import formSchema from './Schema'

// const UseFormikprac = () => {
//  const {values,errors,handleBlur, handleSubmit, handleChange,touched}=useFormik(
// {

//   initialValues:{
//     fname:'',
//     Lname:'',
//     Phone:"",
//     Password:"",
//     ConfirmPassword:"",
//     },
//     validationSchema:formSchema,
// onSubmit:(values)=>{
//   console.log(values)
// }
// }
//  );
//     return (
//     <>
//     <center>
//     <form action="">
//     <label htmlFor='firstname' >First Name:</label>
//       <input autoComplete='off' type="text" id='firstname'  name="fname" value={values.fname} onChange={handleChange} onBlur={handleBlur} />
// {errors.fname &&touched.fname ? <p>{errors.fname}</p>:null}
// <br />
//       <label htmlFor="Lname">Last Name:</label>
//       <input   type="text" name="Lname" id="Lname" value={values.Lname} onChange={handleChange}  onBlur={handleBlur}/>
//       <br />
//       <label htmlFor="Phone">Phone:</label>
//       <input  type="Phone" name="Phone" id="Phone"   value={values.Phone} onChange={handleChange} onBlur={handleBlur}/>
//       <br />
//       <label htmlFor="Password">Password</label> 
//       <input   type="password" name="Password" id="Password"  value={values.Password} onChange={handleChange} onBlur={handleBlur}/>
//       <br />
//       <label htmlFor="ConfirmPassword">Confirm Password:</label>
//       <input   type="password" name="ConfirmPassword" id="ConfirmPassword"   value={values.ConfirmPassword} onChange={handleChange} onBlur={handleBlur}/>
//       <br />
//       <button onSubmit={handleSubmit} type='submit'>Submit </button>
//       </form>
//       </center>
//     </>
//   )
// }

// export default UseFormikprac





















import React from "react";
import logo from "./logonew.png";
import "./Login.css";
import { Form, FormGroup, Button, Label, Input } from "reactstrap";
import { useFormik } from 'formik'


const Login = () => {
const { values, errors, handleBlur, handleSubmit, handleChange, touched } =
  useFormik({
    initialValues: {
      Email: "",
      Password: "",
    },
    // validationSchema: formSchema,
    onSubmit:(values)=>{
      console.log(values)
    }
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
                  <i class="fa-solid fa-play"></i> Digital
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

                <Form>
                  <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    
                      <Input
                        value={values.Name}
                        className="logoformheight"
                        id="exampleEmail"
                        name="Email"
                        type="email"
                        onChange={handleChange}
                      />
                
                  </FormGroup>
                  <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <div className=" position-relative">
                      <Input
                        value={values.Password}
                        className="logoformheight"
                        id="examplePassword"
                        name="Password"
                        type="password"
                        onChange={handleChange}
                      />
                      <span>
                        {" "}
                        <i
                          className="fa-solid fa-eye position-absolute"
                          style={{ bottom: "10px", right: "10px" }}
                        ></i>
                      </span>
                    </div>
                  </FormGroup>
                  <div className="d-flex justify-content-between mt-2">
                    <FormGroup check>
                      <Input type="checkbox" />{" "}
                      <Label check>Remember me </Label>
                    </FormGroup>
                    <p>Forget Password</p>
                  </div>
                  <Button className="bgdiv btn w-100  border-0">Login</Button>
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
