import React from "react";

function Table(props) {
  return <div className={`table${props.fluid ? "-fluid" : ""}`} {...props} />;
}

export default Table;