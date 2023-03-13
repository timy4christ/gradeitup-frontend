import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import AssignmentForm from "./components/student/AssignmentForm";
import StudentSignUp from "./components/admin/StudentSignUp";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import AdminDashboard from "./components/admin/AdminDashboard";
import CodeReviewerSignUp from "./components/admin/CodeReviewerSignUp";
import AssignmentReviewView from "./components/codereviewer/AssignmentReviewView";
import AssignmentReviewForm from "./components/codereviewer/AssignmentReviewForm";
import StudentDashboard from "./components/student/StudentDashboard";
import CodeReviewerDashboard from "./components/codereviewer/CodeReviewerDashboard";
import CategoriesPage from "./components/admin/CategoriesPage";
import AddCategoryPage from "./components/admin/AddCategoryPage";
import CodeReviewerUpdateProfile from "./components/codereviewer/CodeReviewerUpdateProfile";
import Contact from "./components/Contact";
import AdminUpdateProfile from "./components/admin/AdminUpdateProfile";
import StudentUpdateProfile from "./components/student/StudentUpdateProfile";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from "react";
import ViewAssignments from "./components/student/ViewAssignments";
import StudentAssignmentView from "./components/student/StudentAssignmentView";
import StudentDetailsTable from "./components/admin/StudentDetailsTable";
import CodeReviewerDetailsTable from "./components/admin/CodeReviewerDetailsTable";

function App() {

  const [isLogged, setisLogged] = useState(false);

  useEffect(() => {
    console.log("inside app.js");
    if (sessionStorage.getItem("id")) {
      setisLogged(true);
    } else {
      setisLogged(false)
    }
  }, [])

  return (
    <BrowserRouter>
      <Header isLogged={isLogged} setisLogged={setisLogged}></Header>
      <ToastContainer autoClose={900} />
      <Routes>

        {/* home */}
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contactus" element={<Contact></Contact>}></Route>


        {/* admin */}
        <Route path="/admin-dashboard" element={<AdminDashboard setisLogged={setisLogged} ></AdminDashboard>}></Route>
        <Route
          path="/admin/update-profile"
          element={<AdminUpdateProfile></AdminUpdateProfile>}
        ></Route>
        <Route path="/admin/add-student" element={<StudentSignUp></StudentSignUp>}></Route>
        <Route
          path="/admin/add-codereviewer"
          element={<CodeReviewerSignUp></CodeReviewerSignUp>}
        ></Route>
        <Route
          path="/admin/student-details"
          element={<StudentDetailsTable></StudentDetailsTable>}
        ></Route>
        <Route
          path="/admin/codereviewer-details"
          element={<CodeReviewerDetailsTable></CodeReviewerDetailsTable>}
        ></Route>
        {/* <Route path="/admin/categories" element={<CategoriesPage></CategoriesPage>}></Route> */}
        {/* <Route path="/admin/add-category" element={<AddCategoryPage></AddCategoryPage>}></Route> */}


        {/* student */}
        <Route path="/student-dashboard" element={<StudentDashboard setisLogged={setisLogged}></StudentDashboard>}></Route>
        <Route
          path="/student/update-profile"
          element={<StudentUpdateProfile />}
        ></Route>
        <Route
          path="/student/add-assignment"
          element={<AssignmentForm></AssignmentForm>}
        ></Route>
        <Route
          path="/student/assignment-report"
          element={<ViewAssignments></ViewAssignments>}
        ></Route>
        <Route
          path="/student/assignmentview"
          element={<StudentAssignmentView></StudentAssignmentView>}
        ></Route>


        {/* codereviewer */}
        <Route path="/codereviewer-dashboard" element={<CodeReviewerDashboard setisLogged={setisLogged}></CodeReviewerDashboard>}></Route>
        <Route
          path="/codereviewer/get-assignments"
          element={<AssignmentReviewView></AssignmentReviewView>}
        ></Route>
        <Route
          path="/codereviewer/assignmentreview"
          element={<AssignmentReviewForm></AssignmentReviewForm>}
        ></Route>
        <Route
          path="/codereviewer/update-profile"
          element={<CodeReviewerUpdateProfile></CodeReviewerUpdateProfile>}
        ></Route>



        {/* login */}
        <Route path="/login" element={<Login setisLogged={setisLogged}></Login>}></Route>

      </Routes>
      {/* <Footer></Footer> */}
    </BrowserRouter>
  );
}

export default App;
