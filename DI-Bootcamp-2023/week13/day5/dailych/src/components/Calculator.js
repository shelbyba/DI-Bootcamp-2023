import React, { useState } from 'react';

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operation, setOperation] = useState('+');
  const [result, setResult] = useState('');

  const handleNum1Change = (event) => {
    setNum1(event.target.value);
  };

  const handleNum2Change = (event) => {
    setNum2(event.target.value);
  };

  const handleOperationChange = (event) => {
    setOperation(event.target.value);
  };

  const handleCalculate = () => {
    let calculatedResult;
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    if (operation === '+') {
      calculatedResult = number1 + number2;
    } else if (operation === '-') {
      calculatedResult = number1 - number2;
    } else if (operation === '*') {
      calculatedResult = number1 * number2;
    } else if (operation === '/') {
      calculatedResult = number1 / number2;
    }

    setResult(calculatedResult);
  };

  return (
    <div className="calculator">
      <h1>React Calculator</h1>
      <div>
        <input type="number" value={num1} onChange={handleNum1Change} />
        <select value={operation} onChange={handleOperationChange}>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
        <input type="number" value={num2} onChange={handleNum2Change} />
        <button onClick={handleCalculate}>Calculate</button>
      </div>
      <p>Result: {result}</p>
    </div>
  );
};

export default Calculator;

