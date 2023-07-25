// DrugInteractionCheck.js
import React, { useState } from 'react';

const DrugInteractionCheck = () => {
  const [currentDrug, setCurrentDrug] = useState('');
  const [newDrug, setNewDrug] = useState('');
  const [interactionResult, setInteractionResult] = useState('');

  const handleCurrentDrugChange = (event) => {
    setCurrentDrug(event.target.value);
  };

  const handleNewDrugChange = (event) => {
    setNewDrug(event.target.value);
  };

  const handleDrugCheck = async () => {
    try {
      const apiKey = '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';
      const url = 'https://api.openai.com/v1/chat/completions';
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          currentDrug,
          newDrug,
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setInteractionResult(data.result);
    } catch (error) {
      console.error('Error while fetching API:', error.message);
      setInteractionResult('An error occurred. Please try again later.');
    }
  };

  return (
    <div>
      {/* Input fields for current and new drugs */}
      <input type="text" value={currentDrug} onChange={handleCurrentDrugChange} placeholder="Current Drug" />
      <input type="text" value={newDrug} onChange={handleNewDrugChange} placeholder="New Drug" />

      {/* DrugCheck button */}
      <button onClick={handleDrugCheck}>DrugCheck</button>

      {/* Display the result */}
      <div>
        <h2>GOOD TO KNOW</h2>
        <p>{interactionResult}</p>
      </div>
    </div>
  );
};

export default DrugInteractionCheck;
