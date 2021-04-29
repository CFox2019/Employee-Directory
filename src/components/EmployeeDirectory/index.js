import React from "react";
import Table from "./Table";
// import Row from "./Row";
import Col from "./Col";
// import EmployeeListItem from "./EmployeeListItem";

function EmployeeDirectory(props) {
  return (
    <div className="container">
      <Table striped bordered hover>
        <thead>
            <Col size="md-12">
              <th>Image</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>DOB</th>
            </Col>
        </thead>
        <tbody>
          <Col size="md-12">
            <tr>
              <img
                alt={props.name}
                src={props.image}
                style={{
                  height:120,
                  width: 170
                }} 
              />
              {props.name}
              {props.phone}
              {props.email}
              {props.dob}
            </tr>
          </Col>
        </tbody>
      </Table>
    </div>
  );
}

export default EmployeeDirectory;