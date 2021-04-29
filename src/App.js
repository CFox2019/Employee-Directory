import React, { Component } from "react";
import Title from "./components/Title";
import EmployeeSearch from "./components/EmployeeSearch";
import EmployeeDirectory from "./components/EmployeeDirectory";
import employees from "./employees.json";
import './App.css';

class App extends Component {

  state = {
    employees
  };

  removeEmployee = id => {
    // Filter this.state.employees for employees with an id not equal to the id being removed
    const employees = this.state.employees.filter(employee => employee.id !== id);
    // Set this.state.employees equal to the new employees array
    this.setState({ employees });
  };

  // Map over this.state.employees and render an EmployeesCard component for each employees object
  render() {
    return (
      <>
        <Title>
          <h1>
            Employee Directory
          </h1>
          <h4>
            Click on carrots to filter by heading or use the search box to narrow your results
          </h4>
        </Title>

        <EmployeeSearch>

        </EmployeeSearch>

        {this.state.employees.map(employee => (
          <EmployeeDirectory
            removeEmployee={this.removeEmployee}
            id={employee.id}
            key={employee.id}
            image={employee.image}
            name={employee.name}
            phone={employee.phone}
            email={employee.email}
            dob={employee.dob}
          />
        ))}
      </>
    );
  }
}

export default App;
