import React from "react";
import "./styles.css";

function EmployeeSearch(props) {
  return(
    <form className="search">
      <FormControl
        type="text"
        placeholder="Search"
        className="mr-sm-2"
        />
      <Button variant="outline-primary">Search</Button>
    </form>
  )
  }

export default EmployeeSearch;