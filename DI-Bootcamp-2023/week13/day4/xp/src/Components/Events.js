import React, { useState } from 'react';

const Events = () => {
  const [inputValue, setInputValue] = useState('');
  

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      alert('Input Value: ' + inputValue);
    }
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChange} onKeyDown={handleKeyDown} />
    </div>
  );
};

export default Events;

/**
 import React, { useState } from 'react';

const Events = () => {
  const [isToggleOn, setIsToggleOn] = useState(true);

  const handleClick = () => {
    setIsToggleOn((prevState) => !prevState);
  };

  return (
    <div>
      <button onClick={handleClick}>{isToggleOn ? 'ON' : 'OFF'}</button>
    </div>
  );
};

export default Events;

 */
