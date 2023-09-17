import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import img1 from '../../src/components/Assests/output.png';

const Wrapper = styled.section`
  padding: 2rem;
  background: linear-gradient(341deg, #539f98, #e8e8e8);
  

  .form-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    border-radius: 10px;
  }

  img {
    width: 100%;
    max-width: 1000px;
    height: auto;
    margin-bottom: 1rem;
  }

  select {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 1rem;
  }

  button {
    padding: 1rem 2rem;
    background-color: #a5c4b4;
    border: none;
    font-weight: 600;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
  }

  button:hover {
    background-color: #8f9da1;
  }

  .result {
    font-size: 1.5rem;
    margin-top: 1rem;
  }
`;

const PredictionForm = () => {
  const [inputData, setInputData] = useState('');
  const [prediction, setPrediction] = useState('');
  const [randomNumber, setRandomNumber] = useState(null);
  const [vegetable, setVegetable] = useState('');
  const [foundItem, setFoundItem] = useState(null);
  const [plotUrl, setPlotUrl] = useState('');
  const [show, setShow] = useState(false);

  const items = [
    { id: 1, name: 'potato', Predicted: 18.03 },
    { id: 2, name: 'tomato', Predicted: 36.73 },
    { id: 3, name: 'pointed grourd', Predicted: 99.90 },
    { id: 4, name: 'Raddish', Predicted: 24.95 },
    { id: 5, name: 'onion', Predicted: 26.22 },
    { id: 6, name: 'garlic', Predicted: 97.51 },
    { id: 7, name: 'cabage', Predicted: 45.69 },
    { id: 8, name: 'cauliflower', Predicted: 66.48 },
    { id: 9, name: 'chilly', Predicted: 58.27 },
    { id: 10, name: 'okra', Predicted: 91.67 },
    { id: 11, name: 'pumkin', Predicted: 29.07 },
    { id: 12, name: 'brinjal', Predicted: 55.36 },
    { id: 13, name: 'ginger', Predicted: 52.38 },
  ];

  const fetchPlot = async () => {
    try {
      const response = await fetch('/get_plot');
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      setPlotUrl(url);
    } catch (error) {
      console.error('Error fetching plot:', error);
    }
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputData(value);

    // Find the item in the array based on the input value
    const item = items.find(item => item.name === value);
    setFoundItem(item);
  };



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
    <Wrapper className="section">
      <div className="form-container">
        <img src={img1} alt="Python Plot" />
        <form id="getp" onSubmit={handleSubmit}>
          <label htmlFor="Vegetable" className="text-xl">
            Vegetable:
          </label>
          <select id="Vegetable" name="Vegetable" onChange={handleInputChange}>
            <option value="">Choose a vegetable</option>
            <option value="potato">Potato</option>
            <option value="tomato">Tomato</option>
            <option value="pointed grourd">Pointed Grourd</option>
            <option value="Raddish">Raddish</option>
            <option value="onion">Onion</option>
            <option value="tomato">Tomato</option>
            <option value="garlic">Garlic</option>
            <option value="cabage">Cabage</option>
            <option value="cauliflower">Cauliflower</option>
            <option value="chilly">Chilly</option>
            <option value="okra">Okra</option>
            <option value="pumkin">Pumkin</option>
            <option value="brinjal">Brinjal</option>
            <option value="ginger">Ginger</option>
          </select>
          <button type="submit">Predict Price</button>
        {foundItem ? (
          <div id="getp">Predicted Price : Rs {foundItem.Predicted}</div>
        ) : (
          <div id="getp">
            {/* No item found for the input value */}
          </div>
        )}
        </form>
      </div>
    </Wrapper>
  );
};

export default PredictionForm;