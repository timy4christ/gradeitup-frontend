import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import AssignmentForm from "./components/student/AssignmentForm";
import StudentSignUp from "./components/admin/StudentSignUp";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
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


function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        {/* home */}
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contactus" element={<Contact></Contact>}></Route>

        {/* admin */}
        <Route path="/admin-dashboard" element={<AdminDashboard></AdminDashboard>}></Route>
        <Route
          path="/admin/add-codereviewer"
          element={<CodeReviewerSignUp></CodeReviewerSignUp>}
        ></Route>
        <Route path="/admin/add-student" element={<StudentSignUp></StudentSignUp>}></Route>
        <Route path="/admin/categories" element={<CategoriesPage></CategoriesPage>}></Route>
        <Route path="/admin/add-category" element={<AddCategoryPage></AddCategoryPage>}></Route>

        {/* student */}
        <Route path="/student-dashboard" element={<StudentDashboard></StudentDashboard>}></Route>
        <Route
          path="/student/add-assignment"
          element={<AssignmentForm></AssignmentForm>}
        ></Route>

        {/* codereviewer */}
        <Route path="/codereviewer-dashboard" element={<CodeReviewerDashboard></CodeReviewerDashboard>}></Route>
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
        <Route path="/login" element={<Login></Login>}></Route>

      </Routes>
      {/* <Footer></Footer> */}
    </BrowserRouter>
  );
}

export default App;
