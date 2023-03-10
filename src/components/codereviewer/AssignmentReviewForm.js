import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getAssignmentByIdFromServer, reviewAssignment } from '../../service/CodeReviewerServiceApi';
import { SideNav } from './SideNav';

function AssignmentReviewForm() {

    const navigate = useNavigate();
    const location = useLocation();

    const [assignment, setAssignment] = useState({});

    let id = location.state.id;

    const getAssignmentById = async () => {
        const response = await getAssignmentByIdFromServer(id);
        console.log(response.data);
        setAssignment(response.data);
    }

    const handleChange = (e) => {
        console.log(e.target.value);
        setAssignment({ ...assignment, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(assignment);
        const response = await reviewAssignment(assignment);
        console.log(response.data);
        if (response.status == 200) {
            toast.success("Reviewed Successfully");
            navigate("/codereviewer/get-assignments");
        } else {
            toast.error("Something went wrong!");
            navigate("/codereviewer/assignmentreview")
        }
    }

    // useEffect(()=>{
    //     console.log(assignment);
    // },[assignment])

    useEffect(() => {

        var urole = sessionStorage.getItem("role");
        console.log(urole);

        if (urole != "codereviewer") {
            sessionStorage.clear();
            navigate("/login");
        } else {
            getAssignmentById();
        }

    }, [])
    return (
        <>
            <div className="row ">
                <div className="col-lg-2 sidebar"><SideNav></SideNav></div>
                <div className="col-lg-10">
                    <div className="register">
                        <div className="">
                            <div className="card mt-2 mb-2 m-1 p-4 col-lg-4 d-block">
                                {/* <div style={{ textAlign: "center" }} className="p-3">
              <img style={{ width: "100px" }} src="images/flavicons/add-friend.png" alt="" />
            </div> */}
                                <h3
                                    className="text-green text-center font-weight-bold"
                                    style={{ fontSize: "40px" }}
                                >
                                    Assignment #1 </h3>
                                <div className=" p-4">
                                    <form onSubmit={handleSubmit}>

                                        <div className="form-group">
                                            <input
                                                type="text"
                                                name="id"
                                                className="form-control"
                                                id="id"
                                                value={assignment.id}
                                                hidden
                                            />
                                            <span
                                                id="id"
                                                className="text-danger font-weight-regular"
                                            ></span>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="name" className="font-weight-regular">
                                                Assignment Name
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                className="form-control"
                                                id="name"
                                                value={assignment.name}
                                                required
                                                readOnly
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
                                                value={assignment.githubUrl}
                                                required
                                                readOnly
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
                                                value={assignment.branch}
                                                required
                                                readOnly
                                            />
                                            <span
                                                id="branch"
                                                className="text-danger font-weight-regular"
                                            ></span>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="codeReviewVideoUrl" className="font-weight-regular">
                                                View Review Url
                                            </label>
                                            <input
                                                type="text"
                                                name="codeReviewVideoUrl"
                                                className="form-control"
                                                id="codeReviewVideoUrl"
                                                value={assignment.codeReviewVideoUrl}
                                                onChange={handleChange}
                                            />

                                            <span
                                                id="codeReviewVideoUrl"
                                                className="text-danger font-weight-regular"
                                            ></span>
                                        </div>

                                        <div className="form-group" style={{ display: "inline-block" }}>
                                            <label htmlFor="marks" className="font-weight-regular">
                                                Marks
                                            </label>
                                            <input
                                                type="number"
                                                name="marks"
                                                style={{ width: "150px" }}
                                                className="form-control m-1"
                                                id="marks"
                                                value={assignment.marks}
                                                onChange={handleChange}
                                            />
                                            <span
                                                id="codeReviewVideoUrl"
                                                className="text-danger font-weight-regular"
                                            ></span>
                                        </div>

                                        <div className="form-group" style={{ display: "inline-block" }}>
                                            <label htmlFor="totalmarks" className="font-weight-regular">
                                                Total Marks
                                            </label>
                                            <input
                                                type="number"
                                                name="totalMarks"
                                                style={{ width: "150px" }}
                                                className="form-control m-1"
                                                id="totalMarks"
                                                value={assignment.totalMarks}
                                                onChange={handleChange}
                                            />
                                            <span
                                                id="codeReviewVideoUrl"
                                                className="text-danger font-weight-regular"
                                            ></span>
                                        </div>

                                        {/* <span class="badge rounded-pill text-bg-primary">Primary</span> */}


                                        {/* <button className='btn btn-success mr-2'>Accept</button>
                                        <button className='btn btn-danger m-2'>Reject</button> */}

                                        <input
                                            type="submit"
                                            name="submit"
                                            //value="Submit"
                                            className="btn btn-success"
                                            autoComplete="off"
                                        />&emsp;



                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* comments */}
                <input
                    type="text"
                    name="comment"
                    //value="Submit"
                    className=""
                // onChange={}
                />&emsp;

                <button className='btn btn-primary'
                >Add Comment</button>

            </div>
        </>


    )
}

export default AssignmentReviewForm