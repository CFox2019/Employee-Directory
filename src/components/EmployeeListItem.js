import React from "react";
import './EmployeeListItem.css';

function EmployeeListItem(props) {
  return (
    <tr>
      <td>
        <img
          alt={props.name}
          src={props.image}
        />
      </td>
      <td>
        {props.name}
      </td>
      <td>
        {props.phone}
      </td>
      <td>
      <a href={`mailto:${props.email}`}>{props.email}</a>
      </td>
      <td>
        {props.dob}
      </td>
    </tr>
  );
}

export default EmployeeListItem;