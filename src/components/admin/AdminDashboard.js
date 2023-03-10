import React, { useEffect, useState } from 'react'
import { getAdminDetailsFromServer } from '../../service/AdminServiceApi';
import { SideNav } from './SideNav'

function AdminDashboard() {

    const [admin, setAdmin] = useState({})

    const getAdminDetails = async () => {
        const response = await getAdminDetailsFromServer();
        console.log(response.data);
        setAdmin(response.data);
    }

    useEffect(() => {
        getAdminDetails();
    }, [])

    return (
        <>
            <div className="row ">
                <div className="col-lg-2 sidebar"><SideNav></SideNav></div>
                <div className="col-lg-10">Testing</div>
            </div>
        </>
    )
}

export default AdminDashboard;