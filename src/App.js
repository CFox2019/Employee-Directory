import React from "react";
import Header from "./components/Header";
import EmployeeSearch from "./components/EmployeeSearch";
import Directory from "./components/Directory";
import './App.css';

function App() {
  return (
    <>
      <Header />
      <EmployeeSearch />
      <Directory />
    </>
  );
}

export default App;
