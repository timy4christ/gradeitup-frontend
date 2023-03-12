import React from 'react';
import { Table } from 'react-bootstrap';
import { SideNav } from './SideNav';
import "./SideNabar.css"

function ViewAssignments() {
    return (
        <div className="row ">
        <div className="col-lg-2 sidebar"><SideNav></SideNav></div>
        <div className="col-lg-10"> <div>
        
        <Table striped>
  <thead>
    <tr>
      
      <th>ID</th>
      <th>Name</th>
      <th>gitHub URL</th>
      <th>status</th>
      <th>Video URL</th>
      <th>Total Marks</th>
      <th>Obtained Marks</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Sushi Kumar</td>
      <td>https://github.com/sep2022-dac/my-spring-boot-project</td>
      <td>Rejected</td>
      <td>https://www.youtube.com/watch?v=xuOuzLWQy3A&list=PL2OrQJM8zmZ2-O_rM2Ju9zYMbY8Ta-8I4</td>
      <td>100</td>
      <td>30</td>
    </tr>
    <tr>
    <td>2</td>
      <td>Yash Kumar</td>
      <td>https://github.com/sep2022-dac/my-spring-boot-project</td>
      <td>Rejected</td>
      <td>https://www.youtube.com/watch?v=xuOuzLWQy3A&list=PL2OrQJM8zmZ2-O_rM2Ju9zYMbY8Ta-8I4</td>
      <td>100</td>
      <td>20</td>
    </tr>
    <tr>
    <td>2</td>
    <td>Vinod Kumar</td>
      <td>https://github.com/sep2022-dac/my-spring-boot-project</td>
      <td>Rejected</td>
      <td>https://www.youtube.com/watch?v=xuOuzLWQy3A&list=PL2OrQJM8zmZ2-O_rM2Ju9zYMbY8Ta-8I4</td>
      <td>100</td>
      <td>40</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Sus Kumar</td>
      <td>https://github.com/sep2022-dac/my-spring-boot-project</td>
      <td>Rejected</td>
      <td>https://www.youtube.com/watch?v=xuOuzLWQy3A&list=PL2OrQJM8zmZ2-O_rM2Ju9zYMbY8Ta-8I4</td>
      <td>100</td>
      <td>30</td>
    </tr>
  </tbody>
</Table>


        
    </div></div>
    </div>
       
    );
}

export default ViewAssignments;