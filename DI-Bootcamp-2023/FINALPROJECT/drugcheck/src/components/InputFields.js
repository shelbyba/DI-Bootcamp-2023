import React, { useState } from 'react';
import './InputFields.css';

const query = async (data) => {
  const response = await fetch(
    "https://api-inference.huggingface.co/models/deepset/roberta-base-squad2",
    {
      headers: { Authorization: "Bearer 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" },
      method: "POST",
      body: JSON.stringify(data),
    }
  );
  const result = await response.json();
  return result;
};

const InputFields = () => {
  const [currentDrug, setCurrentDrug] = useState('');
  const [newDrug, setNewDrug] = useState('');
  const [answer, setAnswer] = useState('');

  const handleCurrentDrugChange = (event) => {
    setCurrentDrug(event.target.value);
  };

  const handleNewDrugChange = (event) => {
    setNewDrug(event.target.value);
  };

  const handleInsertCurrentDrug = () => {
    console.log('Current Drug:', currentDrug);
    setCurrentDrug('');
  };

  const handleInsertNewDrug = () => {
    console.log('New Drug:', newDrug);
    setNewDrug('');
  };

  const handleDrugCheck = async () => {
    const data = {
      inputs: {
        question: `Is there drug interaction between ${currentDrug} and ${newDrug}?`,
        context: "", // Provide relevant context if needed
      },
    };

    try {
      const response = await query(data);
      setAnswer(response.answer);
    } catch (error) {
      console.error('Error while fetching API:', error.message);
      setAnswer('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="input-fields">
      {/* Left Section */}
      <div>
        <h2>Insert Current Drug</h2>
        <input
          type="text"
          value={currentDrug}
          onChange={handleCurrentDrugChange}
          placeholder="Enter the name of the current drug"
        />
        <button onClick={handleInsertCurrentDrug}>Insert</button>
  
        <h2>Insert New Drug</h2>
        <input
          type="text"
          value={newDrug}
          onChange={handleNewDrugChange}
          placeholder="Enter the name of the new drug"
        />
        <button onClick={handleInsertNewDrug}>Insert</button>
  
        <button className="drug-check-btn" onClick={handleDrugCheck}>DrugCheck</button>
      </div>
  
      {/* Right Section */}
      <div className="answer-container">
        <h2 className="answer-title">GOOD TO KNOW</h2>
        {/* Display the answer generated */}
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default InputFields;
