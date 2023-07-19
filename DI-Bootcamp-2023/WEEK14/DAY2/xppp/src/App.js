
import React, { Component } from 'react';

class BuggyCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  handleClick = () => {
    const { counter } = this.state;
    if (counter === 5) {
      // Simulate a crash when the counter reaches 5
      throw new Error('I crashed!');
    }

    this.setState((prevState) => ({
      counter: prevState.counter + 1
    }));
  };

  render() {
    return (
      <div onClick={this.handleClick}>
        {this.state.counter}
      </div>
    );
  }
}

export default BuggyCounter;


