import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { SideNav } from './SideNav';
import "./SideNabar.css"
import { getAssignmentsByStudentIdFromServer } from '../../service/StudentServiceApi';
import { useNavigate } from 'react-router-dom';

function ViewAssignments() {

  const navigate = useNavigate();

  const [assignment, setAssignment] = useState([]);

  const getAssignments = async () => {
    var id = sessionStorage.getItem("id");
    const response = await getAssignmentsByStudentIdFromServer(id);
    console.log(response.data);
    setAssignment(response.data);
  }

  const handleClick = (id) => {
    navigate("/student/assignmentview", { state: { id: id } })
  }

  useEffect(() => {

    var urole = sessionStorage.getItem("role");
    console.log(urole);

    if (urole != "student") {
      sessionStorage.clear();
      navigate("/login");
    } else {
      getAssignments();
    }


  }, [])



  return (
    <div className="row ">
      <div className="col-lg-2 sidebar"><SideNav></SideNav></div>
      <div className="col-lg-10"> <div>

        <Table striped>
          <thead>
            <tr>

              <th>ID</th>
              <th>Assignment Name</th>
              <th>GitHub URL</th>
              <th>Status</th>
              <th>CodeReviewer</th>
              <th>Obtained Marks</th>
              <th>Total Marks</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              assignment.map((item) => {
                return (
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.githubUrl}</td>
                    <td>{item.status === "false" ? "Pending" : "Review Complete"}</td>
                    <td>{item.codeReviewer.firstName} {item.codeReviewer.lastName}</td>
                    <td>{item.marks}</td>
                    <td>{item.totalMarks}</td>
                    <td><button className='btn btn-primary' onClick={() => handleClick(item.id)}>View</button></td>
                  </tr>
                );
              })

            }

          </tbody>
        </Table>



      </div></div>
    </div>

  );
}

export default ViewAssignments;