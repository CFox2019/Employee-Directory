import React from "react";
import "./styles.css";

function Directory() {
  return (
    <>
      <Table>
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
            <td><img></img></td>
            <td>Zoey Brown</td>
            <td>(662)6569226)</td>
            <td>@zoey.brown@example.com</td>
            <td>07-07-1952</td>
          </tr>
          <tr>
            <td></td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}

export default Directory;