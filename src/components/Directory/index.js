import React from "react";
import Table from "./Table";
import Row from "./Row";
import Col from "./Col";
// import EmployeeListItem from "./EmployeeListItem";

function Directory() {
  return (
    <>
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
      </Table>
    </>
  );
}

export default Directory;