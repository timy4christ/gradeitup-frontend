import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import swal from "sweetalert";
import "../../cssfiles/SignUp.css";
import { addStudent } from "../../service/AdminServiceApi";
import { SideNav } from "./SideNav";

function StudentSignUp() {

  // const initialValues = {
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   password: "",
  //   mobileNo: ""
  // };

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    mobileNo: ""
  });

  const navigate = useNavigate();

  const [subject, setSubject] = useState({});

  const handleChange = (e) => {
    //console.log("hello");
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const response = await addStudent(data);
    console.log(response.data);
    if (response.status == 200) {
      swal("Registeration Successfully", "Student is Registered Successfully!", "success");
      navigate("/admin-dashboard");
    } else {
      toast.error("Something went wrong!");
      setData({
        firstName: "",
        lastName: "",
        email: "",
        mobileNo: "",
        password: "",
        role: ""
      });
      navigate("/admin/add-student")
    }
  };


  useEffect(() => {
    var urole = sessionStorage.getItem("role");
    console.log(urole);

    if (urole != "admin") {
      sessionStorage.clear();
      navigate("/login");
    }
  }, [])

  const validate = (e) => {
    const firstNameRegex = /^[a-zA-Z]{3,}$/;
    const regax = /^[^0-9]{2,}[a-z0-9._%+-]+@gmail\.com$/i;
    const validpass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$/g;
    const phoneNumberRegex = /^[6-9]\d{9}$/


    if (!data.email) {
      toast.error("Email is required!");
      return false;
    } else if (!regax.test(data.email)) {
      swal("Email", "This is not a valid email format!", "error")
      return false;
    }
    if (!data.firstName) {
      toast.error("First Name is required!");
      return false;
    } else if (!firstNameRegex.test(data.firstName)) {
      swal("FirstName", "Enter valid name. 1. Only Characters 2.Minimum three Characters", "error")
      return false;
    }
    if (!data.lastName) {
      toast.error("Last Name is required!");
      return false;
    }
    if (!data.password) {
      toast.error("Password is required!");
      return false;
    } else if (!validpass.test(data.password)) {
      swal("Password", "Alphanumeric string required", "error")
      return false;
    }
    if (!data.mobileNo) {
      toast.error("Phone Number required!");
      return false;
    } else if (!phoneNumberRegex.test(data.mobileNo)) {
      swal("Phone Number", "Valid Phone number starting with 6 to 9", "error")
      return false;
    }
    handleSubmit();
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
                  <form>
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
                    </div>
                    <input
                      type="button"
                      name="submit"
                      className="btn btn-primary"
                      value={"Register"}
                      onClick={validate}
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
