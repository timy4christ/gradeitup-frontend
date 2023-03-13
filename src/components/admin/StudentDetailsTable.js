import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { getStudentDetails } from '../../service/AdminServiceApi';
import { SideNav } from './SideNav'

function StudentDetailsTable() {

    const navigate = useNavigate();

    const [students, setStudents] = useState([]);

    const getAllStudents = async () => {
        const response = await getStudentDetails();
        console.log(response.data);
        setStudents(response.data);
    }

    useEffect(() => {
        var urole = sessionStorage.getItem("role");
        console.log(urole);

        if (urole != "admin") {
            sessionStorage.clear();
            navigate("/login");
        } else {
            getAllStudents();
        }
    }, [])

    return (
        <div className="row ">
            <div className="col-lg-2 sidebar"><SideNav></SideNav></div>
            <div className="col-lg-10"><div>

                <Table striped className='mt-5'>
                    <thead>
                        <tr>

                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Mobile Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            students.map((item) => {
                                return (
                                    <tr>
                                        <td>{item.id}</td>
                                        <td>{item.firstName} {item.lastName}</td>
                                        <td>{item.email}</td>
                                        <td>{item.mobileNo}</td>
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

export default StudentDetailsTable