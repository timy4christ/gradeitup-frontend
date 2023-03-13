import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { getAssignmentByCodeReviewerIdFromServer } from '../../service/CodeReviewerServiceApi';
import Message from '../admin/Message';
import { SideNav } from './SideNav';

function AssignmentReviewView() {

    const navigate = useNavigate();

    const [assignments, setAssignments] = useState([]);

    const getAllAssignments = async () => {
        var id = sessionStorage.getItem("id");
        const response = await getAssignmentByCodeReviewerIdFromServer(id);
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
            navigate("/login");
        } else {
            getAllAssignments();
        }
    }, [])


    return (
        <>
            <div className="row">
                <div className="col-lg-2 sidebar"><SideNav></SideNav></div>
                <div className="col-lg-10">
                    <div className='row'>
                    {

                        assignments.length === 0 ? (
                            <Message style={{}}>
                                No assigments pending for review. Students will be submitting their assignment shortly.
                            </Message>
                        ) : assignments.map((item) => {

                            return (
                                <div className='col-4'>

                                    <div style={{ marginLeft: "10%", width: "100%", marginRight: "10%", paddingTop: "50px", marginBottom: "-15px" }}>
                                        <Card className="text-center box" style={{ width: "100%" }}>
                                            <Card.Header>Assignment {item.id}</Card.Header>
                                            <Card.Body>
                                                <Card.Title>{item.name}</Card.Title>
                                                <Card.Text className='text-start'>
                                                    <strong>GitHubUrl: </strong>{item.githubUrl}<br />
                                                    <strong>Branch: </strong>{item.branch}
                                                </Card.Text>
                                                <Button variant="primary" onClick={() => { handleClick(item.id) }}> Review </Button>
                                            </Card.Body>
                                            <Card.Footer className="text-muted">Submitted By: {item.student.firstName} {item.student.lastName}</Card.Footer>
                                        </Card>
                                    </div>
                                </div>
                            )

                        })

                    }
                    </div>
                </div>
            </div>

        </>
    )
}

export default AssignmentReviewView