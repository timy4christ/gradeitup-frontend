import React from 'react'
import { SideNav } from './SideNav'

function StudentDashboard() {
    return (
        <>
            <div className="row ">
                <div className="col-lg-2 sidebar"><SideNav></SideNav></div>
                <div className="col-lg-10">Testing</div>
            </div>
        </>
    )
}

export default StudentDashboard;