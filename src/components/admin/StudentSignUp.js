import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../cssfiles/SignUp.css";
import { addStudent } from "../../service/AdminServiceApi";
import { SideNav } from "./SideNav";

function StudentSignUp() {
  const navigate = useNavigate();

  const [subject, setSubject] = useState({});

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    mobileNo: "",
  });

  const handleChange = (e) => {
    // console.log(e.target.value);
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);
    const response = await addStudent(data);
    console.log(response.data);
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
                  Student Registration
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
                        required
                      />
                      <span
                        id="fName"
                        className="text-danger font-weight-regular"
                      ></span>
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
                        required
                      />
                      <span
                        id="lName"
                        className="text-danger font-weight-regular"
                      ></span>
                    </div>
                    <div className="form-group">
                      <label className="font-weight-regular"> Email </label>
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        id="emails"
                        value={data.email}
                        onChange={handleChange}
                        required
                      />
                      <span
                        id="emailids"
                        className="text-danger font-weight-regular"
                      ></span>
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
                        required
                      />
                      <span
                        id="passwords"
                        className="text-danger font-weight-regular"
                      ></span>
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
                        pattern="[0-9]{10}"
                        required
                      />
                      <span
                        id="mobileNo"
                        className="text-danger font-weight-regular"
                      ></span>
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

export default StudentSignUp;
