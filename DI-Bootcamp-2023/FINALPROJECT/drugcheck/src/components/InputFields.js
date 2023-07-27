import React, { useState } from 'react';
import axios from 'axios';
import './InputFields.css';

const InputFields = ({ backendUrl }) => {
  const [newDrug, setNewDrug] = useState('');
  const [interactionResult, setInteractionResult] = useState('');

  const handleNewDrugChange = (event) => {
    setNewDrug(event.target.value);
  };

  const handleDrugCheck = async () => {
    const trimmedDrugName = newDrug.trim();
    
    // Check if the drug name is valid
    if (trimmedDrugName === '') {
      setInteractionResult({
        drug: '',
        interaction: 'Enter a valid drug name.',
      });
    } else {
      try {
        // Fetch drug-gene interactions from the DGIdb API
        const response = await axios.get(`${backendUrl}/drug-interaction-proxy?genes=${trimmedDrugName}`);
        console.log(response.data)
        const data = response.data;
    
        // Check if any interactions are found
        if (data.matchedTerms && data.matchedTerms.length > 0) {
          const interactionData = data.matchedTerms[0];
          setInteractionResult({
            drug: interactionData.query,
            interaction: interactionData.interactions.map((interaction) => interaction.drug_name).join(', '),
          });
        } else {
          setInteractionResult({
            drug: trimmedDrugName,
            interaction: 'No known interactions.',
          });
        }
      } catch (error) {
        console.error('Error while fetching drug interaction data:', error.message);
        setInteractionResult({
          drug: trimmedDrugName,
          interaction: 'An error occurred while fetching drug interaction data',
        });
      }
    }
  };
  
  return (
    <div className="input-fields">
      {/* Left Section */}
      <div>
        <h2>Insert New Drug</h2>
        <input
          type="text"
          value={newDrug}
          onChange={handleNewDrugChange}
          placeholder="Enter the name of the new drug"
        />

        <button className="drug-check-btn" onClick={handleDrugCheck}>
          DrugCheck
        </button>
      </div>

      {/* Right Section */}
      <div className="answer-container">
        <h2 className="answer-title">GOOD TO KNOW</h2>
        {/* Display the answer generated */}
        {interactionResult ? (
          <pre>
            {interactionResult.interaction ? interactionResult.interaction : 'Loading...'}
          </pre>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default InputFields;

