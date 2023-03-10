import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "../cssfiles/Login.css";
import { login } from "../service/AdminServiceApi";

function Login() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: "",
    role: ""
  });

  const handleChange = (e) => {
    // console.log(e.target.value);
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);
    const response = await login(data);
    console.log(response.data);


    if (response.data != null && data.role === "student") {
      navigate("/student-dashboard");
    } else if (response.data != null && data.role === "codereviewer") {
      navigate("/codereviewer-dashboard");
    } else if (response.data != null && data.role === "admin") {
      navigate("/admin-dashboard");
    }


    // if (response.data != "") {
    //     var user = response.data;

    //     sessionStorage.setItem("id", user.id);
    //     sessionStorage.setItem("firstName", user.firstName,);
    //     sessionStorage.setItem("lastName", user.lastName,);
    //     sessionStorage.setItem("email", user.email);
    //     sessionStorage.setItem("password", user.password,);
    //     sessionStorage.setItem("role", user.role);

    //     toast.success("Login Succesfull");
    //     navigate("/order_online");
    // } else {
    //     toast.error("Invalid User");
    //     setData({
    //         email: "",
    //         password: "",
    //     });
    //     navigate("/login_form");
    // }
  };

  return (
    <>
      <div className="login-structure">
        <div className="wrapper">
          <header>Login Form</header>
          <form action="#" method="POST" onSubmit={handleSubmit}>
            <div className="field email">
              <div className="input-area">
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={data.email}
                  placeholder="Email Address"
                  onChange={handleChange}
                  required
                />
                <i className="icon fas fa-envelope" />
                <i className="error error-icon fas fa-exclamation-circle" />
              </div>
              <div className="error error-txt">Email can't be blank</div>
            </div>
            <div className="field password">
              <div className="input-area">
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={data.password}
                  placeholder="Password"
                  onChange={handleChange}
                  required
                />
                <i className="icon fas fa-lock" />
                <i className="error error-icon fas fa-exclamation-circle" />
              </div>
              <div className="error error-txt">Password can't be blank</div>
            </div>
            <div className="selectRoleLogin">
              {/* <label for="role">Role</label> */}

              <input
                type="radio"
                id="rolestudent"
                name="role"
                value="student"
                onClick={handleChange}
              ></input>
              <label for="rolestudent">Student</label>
              <input
                type="radio"
                id="rolecodereviewer"
                name="role"
                value="codereviewer"
                onClick={handleChange}
              ></input>
              <label for="rolecodereviewer">Reviewer</label>
              <input
                type="radio"
                id="rolestudentadmin"
                name="role"
                value="admin"
                onClick={handleChange}
              ></input>
              <label for="rolestudentadmin">Admin</label>
            </div>
            <div className="pass-txt">
              {/* <Link to="#">Forgot password?</Link> */}
            </div>
            <input
              type="submit"
              name="submit"
              id="submit"
              defaultValue="Login"
            />
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
