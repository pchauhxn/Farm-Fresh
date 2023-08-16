import React, { useState } from 'react';
import axios from 'axios';

const PredictionForm = () => {
  const [inputData, setInputData] = useState('');
  const [prediction, setPrediction] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/predict', { inputData });
      setPrediction(response.data.prediction);
    } catch (error) {
      console.error('Error fetching prediction:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
        />
        <button type="submit">Get Prediction</button>
      </form>
      <div>Prediction: {prediction}</div>
    </div>
  );
};

export default PredictionForm;