import React, { useEffect, useState } from 'react'
import { SideNav } from './SideNav'
import "./profile.css"
import { getCodeReviewerDetailFromServer, updateCodeReviewerDetails } from '../../service/CodeReviewerServiceApi';
import { useNavigate } from 'react-router-dom';

function CodeReviewerUpdateProfile() {

    const navigate = useNavigate();
    const [crDetails, setcrDetails] = useState({
        id: "",
        firstName: "",
        lastName: "",
        email: "",
        mobileNo: ""
    });

    const getCodeReviewerDetail = async () => {
        var id = sessionStorage.getItem("id");
        const response = await getCodeReviewerDetailFromServer(id); //need to add session id
        console.log(response.data);
        setcrDetails(response.data);
    }

    const handleChange = (e) => {
        console.log();
        setcrDetails({ ...crDetails, [e.target.name]: e.target.value });
    }

    const handleClick = async () => {
        const response = await updateCodeReviewerDetails(crDetails);
        console.log(response.data);
        navigate("/codereviewer-dashboard");
    }

    useEffect(() => {

        var urole = sessionStorage.getItem("role");
        console.log(urole);

        if (urole != "codereviewer") {
            sessionStorage.clear();
            navigate("/login");
        } else {
            getCodeReviewerDetail();
        }

    }, [])



    return (
        // <div className="row ">
        //     <div className="col-lg-2 sidebar"><SideNav></SideNav></div>
        //     <div className="col-lg-10">Testing</div>
        // </div>

        <div className="row ">
            <div className="col-lg-2 sidebar"><SideNav></SideNav></div>
            <div className="col-lg-10"><div>


                <div className="container rounded bg-white mt-5 mb-5">
                    <div className="row">
                        <div className="col-md-3 border-right">

                        </div>
                        <div className="col-md-5 border-right">
                            <div className="p-3 py-5">
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <h4 className="text-right">CodeReviewer Profile</h4>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} className="">
                                    <label className="labels">CodeReviewer ID</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="id"
                                        name="id"
                                        //onChange={handleChange}
                                        value={crDetails.id}
                                        disabled

                                    />
                                </div>
                                <div className="row">
                                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} className="">
                                        <label className="labels">First Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="First  Name"
                                            name="firstName"
                                            value={crDetails.firstName}
                                            onChange={handleChange}
                                            required

                                        />
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                        <label className="labels">Last Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Last Name"
                                            name="lastName"
                                            onChange={handleChange}
                                            value={crDetails.lastName}
                                            required

                                        />
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} className="">
                                        <label className="labels">Email</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            placeholder="EmailId"
                                            name="email"
                                            // onChange={handleChange}
                                            value={crDetails.email}
                                            disabled
                                            required

                                        />
                                    </div>

                                </div>
                                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} className="mt-3">
                                    <label className="labels">Phone</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Phone"
                                        name="mobileNo"
                                        onChange={handleChange}
                                        value={crDetails.mobileNo}
                                        required

                                    />
                                </div>

                            </div>

                            <div className=" text-center">
                                <button
                                    className="btn btn-primary profile-button"
                                    type="button"
                                    onClick={handleClick}
                                >
                                    Update Profile
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div></div>
        </div>


    )
}

export default CodeReviewerUpdateProfile