import React from "react";

function EmployeeSearch(props) {
  return(
    <>
      <form className="search">
        <input
          type="text"
          placeholder="Search"
          className="mr-sm-2"
        />
      </form>
    </>
  );
}

export default EmployeeSearch;