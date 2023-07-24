

import React, { Component } from 'react';
import FormComponent from './FormComponent';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      age: '',
      gender: 'male',
      destination: 'Japan',
      lactoseFree: false,
    };
  }

  handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    const newValue = type === 'checkbox' ? checked : value;

    this.setState({
      [name]: newValue,
    });
  };

  render() {
    return (
      <div>
        <FormComponent
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          age={this.state.age}
          gender={this.state.gender}
          destination={this.state.destination}
          lactoseFree={this.state.lactoseFree}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

export default App;

