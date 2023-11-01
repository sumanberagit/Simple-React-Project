import React, { Component } from 'react';
import Navbar from './components/Footer'

class MultiPageRegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      formData: {
        // Initialize your form data here
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        // Add more fields as needed
      },
    };
  }

  handleNextPage = () => {
    this.setState((prevState) => ({
      currentPage: prevState.currentPage + 1,
    }));
  };

  handlePreviousPage = () => {
    this.setState((prevState) => ({
      currentPage: prevState.currentPage - 1,
    }));
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      formData: {
        ...prevState.formData,
        [name]: value,
      },
    }));
  };

  render() {
    const { currentPage, formData } = this.state;

    return (
      <>
      
      <div>
      <Navbar/>
        {currentPage === 1 && (
          <div>
            <h2>Page 1: Personal Information</h2>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={this.handleChange}
            />
            <button onClick={this.handleNextPage}>Next</button>
          </div>
        )}

        {currentPage === 2 && (
          <div>
            <h2>Page 2: Account Information</h2>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={this.handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={this.handleChange}
            />
            <button onClick={this.handlePreviousPage}>Previous</button>
            <button onClick={this.handleNextPage}>Next</button>
          </div>
        )}

        {currentPage === 3 && (
          <div>
            <h2>Page 3: Confirmation</h2>
            <p>First Name: {formData.firstName}</p>
            <p>Last Name: {formData.lastName}</p>
            <p>Email: {formData.email}</p>
            <button onClick={this.handlePreviousPage}>Previous</button>
            <button onClick={this.handleSubmit}>Submit</button>
          </div>
        )}
      </div>
      </>
    );
  }
}

export default MultiPageRegistrationForm;
