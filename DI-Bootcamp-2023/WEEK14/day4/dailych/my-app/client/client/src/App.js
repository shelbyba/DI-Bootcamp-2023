// client/src/App.js

import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    message: '',
    inputValue: '',
  };

  async componentDidMount() {
    try {
      const response = await fetch('/api/hello');
      const data = await response.text();
      this.setState({ message: data });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('/api/world', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ value: this.state.inputValue }),
      });
      const data = await response.text();
      console.log('Response from server:', data);
      this.setState({ message: data });
    } catch (error) {
      console.error('Error sending data:', error);
    }
  };

  handleChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>{this.state.message}</h1>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              value={this.state.inputValue}
              onChange={this.handleChange}
              placeholder="Type something..."
            />
            <button type="submit">Submit</button>
          </form>
        </header>
      </div>
    );
  }
}

export default App;

