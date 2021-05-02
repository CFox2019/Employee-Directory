import React, { Component } from "react";
import EmployeeSearch from "./components/EmployeeSearch.js";
import EmployeeDirectory from "./components/EmployeeDirectory.js";
import './App.css';
import API from './utils/API'
import Employee from "./models/Employee";
import Header from "./components/Header.js";
class App extends Component {

  state = {
    employees: [],
    filteredEmployees: []
  };

  componentDidMount = () => {
    this.fetchRandomEmployees();
  }

  fetchRandomEmployees = () => (
    API.getRandomEmployees()
      .then(response => {
        const employees = response.data.results.map(employee => {
          const emp = new Employee()
          emp.id = employee.login.uuid;
          emp.name = `${employee.name.first} ${employee.name.last}`;
          emp.image = employee.picture.large;
          emp.email = employee.email;
          emp.phone = employee.phone;
          emp.dob = employee.dob.date;
          return emp;
        })
        this.setState({ employees })
      })
  )

  removeEmployee = id => {
    // Filter this.state.employees for employees with an id not equal to the id being removed
    const employees = this.state.employees.filter(employee => employee.id !== id);
    // Set this.state.employees equal to the new employees array
    this.setState({ employees });
  };

  handleEmployeeSearch = event => {
    const searchTerm = event.target.value
    if (searchTerm.length === 0) {
      this.setState({ filteredEmployees: [] })
      return
    }

    const employees = this.state.employees.filter(employee => employee.name.includes(searchTerm));
    this.setState({ filteredEmployees: employees });
  }

  render() {
    return (
      <div className="container-fluid">
        <Header />

        <EmployeeSearch handleSearch={this.handleEmployeeSearch} />

        <div className="container">
          <EmployeeDirectory
            employees={this.state.filteredEmployees.length > 0 ? this.state.filteredEmployees : this.state.employees}
            removeEmployee={this.removeEmployee}
          />
        </div>

      </div>
    );
  }
}

export default App;
