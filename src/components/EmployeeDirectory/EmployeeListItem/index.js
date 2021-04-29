import React from "react";

function EmployeeListItem(props) {
  return (
    <div className="list-item">
        <div className="list-container">
          <ul>
            <li>
              <img alt={props.name} src={props.image} />
            </li>
            <li>
              {props.name}
            </li>
            <li>
              {props.phone}
            </li>
            <li>
              {props.email}
            </li>
            <li>
              {props.dob}
            </li>
          </ul>
        </div>
    </div>
  );
}

export default EmployeeListItem;