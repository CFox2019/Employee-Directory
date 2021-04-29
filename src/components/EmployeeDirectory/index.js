import React from "react";
import Table from "./Table";
// import EmployeeListItem from "./EmployeeListItem";

function EmployeeDirectory(props) {
  return (
    <div className="container">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>DOB</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img
                alt={props.name}
                src={props.image}
                style={{
                  height:120,
                  width: 170
                }}
              />
            </td>
            <td>
              {props.name}
            </td>
            <td>
              {props.phone}
            </td>
            <td>
              {props.email}
            </td>
            <td>
              {props.dob}
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default EmployeeDirectory;