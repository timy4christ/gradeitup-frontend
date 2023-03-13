import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import "../../cssfiles/SignUp.css"
import { addAssignment, getCodeReviewerListFromServer } from '../../service/StudentServiceApi';
import { SideNav } from './SideNav';

function AssignmentForm() {

    const navigate = useNavigate();

    const [codeReviewerList, setCodeReviewerList] = useState([]);

    const [data, setData] = useState({
        name: "",
        githubUrl: "",
        branch: "",
        status: "false",
        codeReviewVideoUrl: "",
        marks: "",
        totalMarks: "",
        studentComments: "",
        codeReviewerComments: "",
        studentId: sessionStorage.getItem("id"),
        codeReviewerId: "",
    })

    const handleChange = (e) => {
        console.log(e.target.value);
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(data);
        const response = await addAssignment(data);
        console.log(response.data);
        if (response.status == 200) {
            toast.success("Assignment Submited Successfully");
            navigate("/student-dashboard");
        } else {
            toast.error("Something went wrong!");

            navigate("/signup_form")
        }
    }

    const getCodeReviewerList = async () => {
        const response = await getCodeReviewerListFromServer();
        console.log(response.data);
        setCodeReviewerList(response.data);
    }

    useEffect(() => {

        var urole = sessionStorage.getItem("role");
        console.log(urole);

        if (urole != "student") {
            sessionStorage.clear();
            navigate("/login");
        } else {
            getCodeReviewerList();
        }
    }, []);

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
                                <h3
                                    className="text-green text-center font-weight-bold"
                                    style={{ fontSize: "40px" }}
                                >
                                    Assignment #1 </h3>
                                <div className=" p-4">
                                    <form action="#" method='POST' onSubmit={handleSubmit}>
                                        <div className="form-group">
                                            <label htmlFor="name" className="font-weight-regular">
                                                Assignment Name
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                className="form-control"
                                                id="name"
                                                value={data.name}
                                                onChange={handleChange}
                                                required
                                            />
                                            <span
                                                id="name"
                                                className="text-danger font-weight-regular"
                                            ></span>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="githubUrl" className="font-weight-regular">
                                                GitHubUrl
                                            </label>
                                            <input
                                                type="text"
                                                name="githubUrl"
                                                className="form-control"
                                                id="githubUrl"
                                                value={data.githubUrl}
                                                onChange={handleChange}
                                                required
                                            />
                                            <span
                                                id="githubUrl"
                                                className="text-danger font-weight-regular"
                                            ></span>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="branch" className="font-weight-regular">
                                                Branch
                                            </label>
                                            <input
                                                type="text"
                                                name="branch"
                                                className="form-control"
                                                id="branch"
                                                value={data.branch}
                                                onChange={handleChange}
                                                required
                                            />
                                            <span
                                                id="branch"
                                                className="text-danger font-weight-regular"
                                            ></span>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="codeReviewVideoUrl" className="font-weight-regular">

                                            </label>
                                            <input
                                                type="text"
                                                name="codeReviewVideoUrl"
                                                className="form-control"
                                                id="codeReviewVideoUrl"
                                                value={data.codeReviewVideoUrl}
                                                onChange={handleChange}
                                                hidden
                                            />
                                            <span
                                                id="codeReviewVideoUrl"
                                                className="text-danger font-weight-regular"
                                            ></span>
                                        </div>

                                        <div className="form-group">
                                            <div>Teacher</div>
                                            <select className="font-weight-regular" name="codeReviewerId" id="codeReviewerId" value={data.codeReviewerId} onChange={handleChange} >
                                                <option></option>
                                                {
                                                    codeReviewerList.map((list) => {
                                                        return (
                                                            <option name="codeReviewerId" value={list.id} >{list.firstName + list.lastName}</option>
                                                        )
                                                    })
                                                }
                                            </select>
                                        </div>

                                        <input
                                            type="submit"
                                            name="submit"
                                            //value="Submit"
                                            className="btn btn-primary"
                                            autoComplete="off"
                                        />&emsp;

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div></div>
            </div>


        </>
    )
}

export default AssignmentForm





