import React from "react";
import './EmployeeDirectory.css';
import EmployeeListItem from "./EmployeeListItem";

function EmployeeDirectory(props) {

  const listEmployees = (employees) => {
    return employees?.map(employee => {
      return <EmployeeListItem
        id={employee.id}
        key={employee.id}
        image={employee.image}
        name={employee.name}
        phone={employee.phone}
        email={employee.email}
        dob={employee.dob}
      />
    })
  }

  return (
    <>
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
        { listEmployees(props.employees) }
      </tbody>
    </>
  );
}

export default EmployeeDirectory;