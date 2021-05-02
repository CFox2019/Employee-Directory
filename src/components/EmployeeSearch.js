import React from "react";
import './EmployeeSearch.css';

function EmployeeSearch(props) {
  return(
    <div className="search">
      <input
        type="text"
        placeholder="Search"
        className="search-input"
        onChange={props.handleSearch}
      />
    </div>
  );
}

export default EmployeeSearch;