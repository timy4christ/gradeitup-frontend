import React, { useEffect, useState } from 'react'
import { SideNav } from './SideNav'
import "./profile.css"
import { getCodeReviewerDetailFromServer } from '../../service/CodeReviewerServiceApi';
import { useNavigate } from 'react-router-dom';

function CodeReviewerDashboard() {

    const navigate = useNavigate();
    const [crDetails, setcrDetails] = useState({});

    const getCodeReviewerDetail = async () => {
        const response = await getCodeReviewerDetailFromServer(1); //need to add session id
        console.log(response.data);
        setcrDetails(response.data);
    }

    const handleClick = (e) => {
        navigate("/codereviewer/update-profile")
    }

    useEffect(() => {

        var urole = sessionStorage.getItem("role");
        console.log(urole);

        if (!urole && urole != "codereviewer") {
            sessionStorage.clear();
            navigate("/");
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
                                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                    <label className="labels">CodeReviewer ID</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        disabled
                                        placeholder="id"
                                        name="id"
                                        //onChange={(e) => onInputChange(e)}
                                        value={crDetails.id}
                                        required

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
                                            disabled
                                            value={crDetails.firstName}
                                            // onChange={(e) => onInputChange(e)}
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
                                            disabled
                                            // onChange={(e) => onInputChange(e)}
                                            value={crDetails.lastName}
                                            required

                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} className="">
                                        <label className="labels">Email</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            placeholder="EmailId"
                                            name="email"
                                            disabled
                                            // onChange={(e) => onInputChange(e)}
                                            value={crDetails.email}
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
                                        disabled
                                        // onChange={(e) => onInputChange(e)}
                                        value={crDetails.mobileNo}
                                        required

                                    />
                                </div>

                            </div>

                            <div className="text-center">
                                <button
                                    className="btn btn-primary profile-button"
                                    type="button"
                                    onClick={handleClick}
                                >
                                    Edit Profile
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div></div>
        </div>


    )
}

export default CodeReviewerDashboard