import React from "react";

function EmployeeListItem(props) {
  return (
    <tr>
      <td>
        <img
          alt={props.name}
          src={props.image}
          style={{
            height:120,
            width: 120
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
  );
}

export default EmployeeListItem;