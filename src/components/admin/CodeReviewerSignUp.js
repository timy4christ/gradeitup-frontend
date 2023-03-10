import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../cssfiles/SignUp.css";
import { addCodeReviewer } from "../../service/AdminServiceApi";
import { SideNav } from "./SideNav";

function CodeReviewerSignUp() {

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    mobileNo: ""};

  const [data, setData] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  

  const navigate = useNavigate();

  const [subject, setSubject] = useState({});

  

  const handleChange = (e) => {
    console.log("hello vinod");
    // console.log(e.target.value);
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors(validate({ ...data, [e.target.name]: e.target.value }));

    
    console.log(data);
    const response = await addCodeReviewer(data);
    console.log(response.data);

     
    setErrors(validate(data)); // adding function-vinod
    setIsSubmit(true);

    // if (response.status == 200) {
    //   //toast.success("Registered Successfully");
    //   navigate("/login_form");
    // } else {
    //   //toast.error("Something went wrong!");
    //   setData({
    //     firstName: "",
    //     lastName: "",
    //     email: "",
    //     mobileNo: "",
    //     password: "",
    //     role:""
    //   });
    //   navigate("/signup_form")
    // }
  };

  
  useEffect(() => {

    console.log(errors);
    if(Object.keys(errors).length === 0 && isSubmit)
    {
      console.log(data);
     
    }

  },[errors]);


  
  const validate = (data) => {
    const errors = {};
    const firstNameRegex = /^[a-zA-Z]+$/;
    const regax = /^[^0-9]{2,}[a-zA-Z0-9._%+-]+@gmail\.com$/i;
    const validpass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,}$/g;
    const phoneNumberRegex = /^[6-9]\d{9}$/
  
    if (!data.email) {
      errors.email = "Email is required!";
    }else if(!regax.test(data.email)){
      errors.email = "this is not a valid email format!";
    }
    if(!data.firstName){
      errors.firstName = "First Name is required!";
    }else if(!firstNameRegex.test(data.firstName)){
      errors.firstName = "Enter valid name- only char";
    }
    if(!data.lastName){
      errors.lastName = "Last Name is required!";
    }
    if (!data.password) {
      errors.password = "Password is required!";
    } else if (!validpass.test(data.password)){
      errors.password = "Required min 5 charactors and Numbers!";
    }
    if (!data.mobileNo) {
      errors.mobileNo = "Phone Number required!";
    }else if(!phoneNumberRegex.test(data.mobileNo)){
      errors.mobileNo = "Enter valid number";
    }
    return errors;
  }


  return (
    <>
      <div className="row ">
        <div className="col-lg-2 sidebar"><SideNav></SideNav></div>
        <div className="col-lg-10">
          <div className="register">
            <div className="">
              <div className="card mt-2 mb-2 m-auto p-4 col-lg-4 d-block">
                {/* <div style={{ textAlign: "center" }} className="p-3">
              <img style={{ width: "100px" }} src="images/flavicons/add-friend.png" alt="" />
            </div> */}
                <h1
                  className="text-green text-center font-weight-bold"
                  style={{ fontSize: "40px" }}
                >
                  CodeReviewer Registration
                </h1>
                <div className=" p-4">
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="name" className="font-weight-regular">
                        First Name
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        className="form-control"
                        id="fname"
                        value={data.firstName}
                        onChange={handleChange}
                        
                      />
                      <span
                        id="fName"
                        className="text-danger font-weight-regular"
                      ></span>
                      <p className="text-danger">{errors.firstName}</p>
                    </div>
                    <div className="form-group">
                      <label htmlFor="name" className="font-weight-regular">
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        className="form-control"
                        id="lname"
                        value={data.lastName}
                        onChange={handleChange}
                        
                      />
                      <span
                        id="lName"
                        className="text-danger font-weight-regular"
                      ></span>
                      <p className="text-danger">{errors.lastName}</p>
                    </div>
                    <div className="form-group">
                      <label className="font-weight-regular"> Email </label>
                      <input
                        type="text"
                        name="email"
                        className="form-control"
                        id="emails"
                        value={data.email}
                        onChange={handleChange}
                        
                      />
                      <span
                        id="emailids"
                        className="text-danger font-weight-regular"
                      ></span>
                      <p className="text-danger">{errors.email}</p>
                    </div>
                    <div className="form-group">
                      <label className="font-weight-regular"> Password </label>
                      <input
                        type="password"
                        name="password"
                        //value={data.password}
                        className="form-control"
                        id="pass"
                        onChange={handleChange}
                        
                      />
                      <span
                        id="passwords"
                        className="text-danger font-weight-regular"
                      ></span>
                      <p className="text-danger">{errors.password}</p>
                    </div>
                    <div className="form-group">
                      <label className="font-weight-regular"> Mobile Number </label>
                      <input
                        type="text"
                        name="mobileNo"
                        className="form-control"
                        id="mobileNo"
                        value={data.mobileNo}
                        onChange={handleChange}
                       
                      />
                      <span
                        id="mobileNo"
                        className="text-danger font-weight-regular"
                      ></span>
                      <p className="text-danger">{errors.mobileNo}</p>
                    </div>

                    <input
                      type="submit"
                      name="submit"
                      className="btn btn-primary"
                    />
                    &emsp;
                  </form>
                </div>
              </div>
            </div>
          </div></div>
      </div>


    </>
  );
}


export default CodeReviewerSignUp;
