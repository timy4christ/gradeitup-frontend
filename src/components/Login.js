import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "../cssfiles/Login.css";
import { login } from "../service/AdminServiceApi";


function Login({ setisLogged }) {
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
    var user = response.data;

    if (user && data.role === "student") {

      sessionStorage.setItem("id", user.id);
      sessionStorage.setItem("firstName", user.firstName,);
      sessionStorage.setItem("lastName", user.lastName,);
      sessionStorage.setItem("email", user.email);
      sessionStorage.setItem("role", "student");

      toast.success("Login Succesfull");
      setisLogged(true);
      navigate("/student-dashboard");
    } else if (user && data.role === "codereviewer") {

      sessionStorage.setItem("id", user.id);
      sessionStorage.setItem("firstName", user.firstName,);
      sessionStorage.setItem("lastName", user.lastName,);
      sessionStorage.setItem("email", user.email);
      sessionStorage.setItem("role", "codereviewer");

      toast.success("Login Succesfull");
      setisLogged(true);
      navigate("/codereviewer-dashboard");
    } else if (user && data.role === "admin") {

      sessionStorage.setItem("id", user.id);
      sessionStorage.setItem("firstName", user.firstName,);
      sessionStorage.setItem("lastName", user.lastName,);
      sessionStorage.setItem("email", user.email);
      sessionStorage.setItem("role", "admin");

      toast.success("Login Succesfull");
      setisLogged(true);
      navigate("/admin-dashboard");
    } else {

      toast.error("Invalid User");
      setData({
        email: "",
        password: "",
        role: ""
      });
      navigate("/login");
    }
  };

  return (
    <>
      <div className="login-structure">
        {/* <pre>{JSON.stringify(data, undefined, 2)}</pre> */}
        <div className="wrapper">
          <header>Login Form</header>
          <form action="#" method="POST" onSubmit={handleSubmit}>
            <div className="field email">
              <div className="input-area">
                <input
                  type="text"
                  name="email"
                  id="email"
                  value={data.email}
                  placeholder="Email Address"
                  onChange={handleChange}

                />
                <br></br>
                <i className="icon fas fa-envelope" />
              </div>
              <br></br>
              
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

                />
                <i className="icon fas fa-lock" />
              </div>
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
