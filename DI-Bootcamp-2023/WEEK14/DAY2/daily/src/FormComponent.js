

import React from 'react';

const FormComponent = (props) => {
  return (
    <div>
      <form>
        <label>
          First Name:
          <input type="text" name="firstName" value={props.firstName} onChange={props.handleChange} />
        </label>
        <br />
        <label>
          Last Name:
          <input type="text" name="lastName" value={props.lastName} onChange={props.handleChange} />
        </label>
        <br />
        <label>
          Age:
          <input type="number" name="age" value={props.age} onChange={props.handleChange} />
        </label>
        <br />
        <label>
          Gender:
          <input type="radio" name="gender" value="male" checked={props.gender === 'male'} onChange={props.handleChange} /> Male
          <input type="radio" name="gender" value="female" checked={props.gender === 'female'} onChange={props.handleChange} /> Female
        </label>
        <br />
        <label>
          Destination:
          <select name="destination" value={props.destination} onChange={props.handleChange}>
            <option value="Japan">Japan</option>
            <option value="USA">USA</option>
            <option value="Germany">Germany</option>
            <option value="India">India</option>
          </select>
        </label>
        <br />
        <label>
          Lactose Free:
          <input type="checkbox" name="lactoseFree" checked={props.lactoseFree} onChange={props.handleChange} />
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
      <hr />
      <h2>Entered Data:</h2>
      <p>First Name: {props.firstName}</p>
      <p>Last Name: {props.lastName}</p>
      <p>Age: {props.age}</p>
      <p>Gender: {props.gender}</p>
      <p>Destination: {props.destination}</p>
      <p>Lactose Free: {props.lactoseFree ? 'Yes' : 'No'}</p>
    </div>
  );
};

export default FormComponent;

