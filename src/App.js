import React from "react";
import EmployeeSearch from "./components/EmployeeSearch";
import Directory from "./components/Directory";
import Header from "./components/Header";
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
