import React from "react";
import './EmployeeListItem.css';

function EmployeeListItem(props) {
  return (
    <tr>
      <td>
        <img
          alt={props.name}
          src={props.image}
          style={{
            height:60,
            width: 60
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
      <a href={`mailto:${props.email}`}>{props.email}</a>
      </td>
      <td>
        {props.dob}
      </td>
    </tr>
  );
}

export default EmployeeListItem;