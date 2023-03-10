import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "../cssfiles/Login.css";
import { login } from "../service/AdminServiceApi";


function Login() {
  const navigate = useNavigate();
  const initialValues = {email:"",password:"",role:""};
  const [data, setData] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  

  const handleChange = (e) => {
    // console.log(e.target.value);
    setData({ ...data, [e.target.name]: e.target.value });
    
  };

  const handleSubmit = async (e) => {
    setErrors(validate({ ...data, [e.target.name]: e.target.value }));
    e.preventDefault();
    console.log(data);
    const response = await login(data);
    console.log(response.data);
    
    
    setErrors(validate(data)); // adding function or calling fn -vinod
    setIsSubmit(true);


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

  useEffect(() => {

    console.log(errors);
    if(Object.keys(errors).length === 0 && isSubmit)
    {
      console.log(data);
     
    }

  },[errors]);

  const validate = (data) => {
    const errors = {};
    const regax = /^[^0-9]{2,}[a-zA-Z0-9._%+-]+@gmail\.com$/i;

    const validpass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/g;
  
    if (!data.email) {
      errors.email = "Email is required!";
    }else if(!regax.test(data.email)){
      errors.email = "this is not a valid email format!";
    }
    if (!data.password) {
      errors.password = "Password is required!";
    } else if (!validpass.test(data.password)){
      errors.password = "Required 4-8 charactors!";
    }
    if (!data.role) {
      errors.role = "Role is required!";
    }
  
    return errors;
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
                <i className="icon fas fa-envelope" />
                <i className="error error-icon fas fa-exclamation-circle" />
                <p className="text-danger">{errors.email}</p>
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
                  
                />
                <i className="icon fas fa-lock" />
                <i className="error error-icon fas fa-exclamation-circle" />
                <p className="text-danger">{errors.password}</p>
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
            <p className="text-danger">{errors.role}</p>
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
