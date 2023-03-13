import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { getAssignmentById } from '../../service/StudentServiceApi';
import { SideNav } from './SideNav';

function StudentAssignmentView() {

    const navigate = useNavigate();
    const location = useLocation();

    const [assignment, setAssignment] = useState({});

    let id = location.state.id;

    const getAssignment = async () => {
        const response = await getAssignmentById(id);
        console.log(response.data);
        setAssignment(response.data);
    }

    useEffect(() => {
        var urole = sessionStorage.getItem("role");
        console.log(urole);

        if (urole != "student") {
            sessionStorage.clear();
            navigate("/login");
        } else {
            getAssignment();
        }
    }, [])


    return (
        <>
            <div className="row ">
                <div className="col-lg-2 sidebar"><SideNav></SideNav></div>
                <div className="col-lg-10 viewBody">

                    <div style={{ marginLeft: "10%", width: "100%", marginRight: "10%", paddingTop: "50px", marginBottom: "-15px" }}>

                        <Card className="text-center box" style={{ width: "25%" }}>
                            <Card.Header className='text-start'>
                                <strong>Assignment Name: </strong>{assignment.name}<br />
                                <strong>GitHubUrl: </strong>{assignment.githubUrl}<br />
                                <strong>ReviewVideoUrl: </strong>{assignment.codeReviewVideoUrl}<br />
                            </Card.Header>
                            <Card.Body>
                                <Card.Title>Post Comments</Card.Title>
                                <Card.Text>
                                    <input className='text m-2'></input>
                                    <button className='btn btn-sm btn-success'>Post</button>
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className="text-muted">Comments</Card.Footer>
                        </Card>
                    </div>


                </div>



            </div>

        </>
    )
}

export default StudentAssignmentView