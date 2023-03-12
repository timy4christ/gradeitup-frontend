import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { getAllAssignmentsFromServer } from '../../service/CodeReviewerServiceApi';
import { SideNav } from './SideNav';
import "./AssignmentReviewView.css"

function AssignmentReviewView() {

    const navigate = useNavigate();

    const [assignments, setAssignments] = useState([]);

    const getAllAssignments = async () => {
        const response = await getAllAssignmentsFromServer();
        console.log(response.data);
        setAssignments(response.data);
    }

    const handleClick = (id) => {
        console.log(id);
        navigate(`/codereviewer/assignmentreview`, { state: { id: id } })
    }

    useEffect(() => {
        var urole = sessionStorage.getItem("role");
        console.log(urole);

        if (urole != "codereviewer") {
            sessionStorage.clear();
            navigate("/");
        } else {
            getAllAssignments();
        }
    }, [])


    return (
        <>
            <div className="row ">
                <div className="col-lg-2 sidebar"><SideNav></SideNav></div>
                <div className="col-lg-10 viewBody">
                    {
                        assignments.map((item) => {

                            return (
                                <>

                                    <div style={{ marginLeft: "10%", width: "100%", marginRight: "10%", paddingTop: "50px", marginBottom: "-15px" }}>

                                        <Card className="text-center box" style={{ width: "25%" }}>
                                            <Card.Header>{item.name}</Card.Header>
                                            <Card.Body>
                                                <Card.Title>{item.name}</Card.Title>
                                                <Card.Text className='text-start'>
                                                    <strong>GitHubUrl: </strong>{item.githubUrl}<br />
                                                    <strong>Branch: </strong>{item.branch}
                                                </Card.Text>
                                                <Link to="/Assignment"> <Button variant="primary">Review</Button></Link>
                                            </Card.Body>
                                            <Card.Footer className="text-muted">2 days ago</Card.Footer>
                                        </Card>
                                    </div>
                                    <div>{item.name}</div>
                                    <button className='btn btn-primary' onClick={() => { handleClick(item.id) }}>Review </button>
                                </>
                            )

                        })

                    }
                </div>
            </div>

        </>
    )
}

export default AssignmentReviewView