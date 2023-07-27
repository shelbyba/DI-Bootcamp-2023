import React, { useState } from 'react';
import './DrugInteractionCheck.css';

const DrugInteractionCheck = () => {
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
        // Fetch drug-gene interactions from your backend server
        const response = await axios.get(`http://localhost:5000/drug-interaction-data?genes=${trimmedDrugName}`);
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
    <div className="drug-interaction-check">
      <h2>Drug Interaction Check</h2>

      {/* Input field for new drug */}
      <input
        type="text"
        value={newDrug}
        onChange={handleNewDrugChange}
        placeholder="Enter the name of new drug"
      />

      {/* DrugCheck button */}
      <button className="drug-check-btn" onClick={handleDrugCheck}>DrugCheck</button>

      {/* Display the result */}
      <div className="result-container">
        <h3>Interaction Result:</h3>
        <pre>{JSON.stringify(interactionResult, null, 2)}</pre>
      </div>
    </div>
  );
};

export default DrugInteractionCheck;

