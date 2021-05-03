import React from "react";
import './EmployeeListItem.css';

function EmployeeListItem(props) {
  const formattedDate = (dob) => {
    const date = new Date(dob)
    return `${date.getMonth()+1}-${date.getDate()}-${date.getFullYear()}`
  }
  return (
    <tr>
      <td>
        <img
          alt={ props.name }
          src={ props.image }
        />
      </td>
      <td>
        { props.name }
      </td>
      <td>
        { props.phone }
      </td>
      <td>
      <a href={`mailto:${props.email}`}>{props.email}</a>
      </td>
      <td>
        { formattedDate(props.dob) }
      </td>
    </tr>
  );
}

export default EmployeeListItem;