import React from 'react';
import Garage from './Garage';
import Events from './Events';

const carinfo = {
  name: 'Ford',
  model: 'Mustang',
};

export class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: 'red' };
  }

  render() {
    const { size } = this.props;
    const sentence = `Who lives in my ${size} Garage?`;

    return (
      <>
        <header>This is a {carinfo.model}</header>
        <p>This car is {this.state.color}</p>
        <p>{sentence}</p>
        <Garage size="small" />
        <Events/>
      </>
    );
  }
}

function App() {
  return (
    <>
      <Car size="small" />
      <Garage />
    </>
  );
}

export default App;
