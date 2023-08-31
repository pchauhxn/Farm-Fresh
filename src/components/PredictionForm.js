import React, { useState } from 'react';
import axios from 'axios';
import styled, { css } from 'styled-components';
import img1 from '../../src/components/Assests/output.png'

const PredictionForm = () => {
  const [inputData, setInputData] = useState('');
  const [prediction, setPrediction] = useState('');
  const [randomNumber, setRandomNumber] = useState(null);
  const [vegetable , setVegetable] = useState('');
  const [foundItem, setFoundItem] = useState(null);
  const [plotUrl, setPlotUrl] = useState('');

  const items = [
    { id: 1, name: 'potato', Predicted: 18.03 },
    { id: 2, name: 'tomato' ,Predicted: 36.73 },
    { id: 3, name: 'pointed grourd',Predicted: 99.90 },
    { id: 4, name: 'Raddish', Predicted: 24.95 },
    { id: 5, name: 'onion' ,Predicted: 26.22 },
    { id: 6, name: 'garlic',Predicted: 97.51},
    { id: 7, name: 'cabage', Predicted: 45.69 },
    { id: 8, name: 'califlower' ,Predicted: 66.48 },
    { id: 9, name: 'chilly',Predicted:58.27},
    { id: 10, name: 'okra', Predicted: 91.67 },
    { id: 11, name: 'pumkin' ,Predicted:29.07 },
    { id: 12, name: 'brinjal',Predicted:55.36},
    { id: 13, name: 'ginger', Predicted:52.38 },
   
   
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

  const generateRandomNumber = () => {
    const newRandomNumber = Math.floor(Math.random() * 200) + 1; // Generates a random number between 1 and 100
    setRandomNumber(newRandomNumber);
    setVegetable(inputData);
  };

  return (
    <Wrapper className='section'>
    <div>
    
      <form onSubmit={handleSubmit} id="getp">

      <img id="plot" src={img1} alt="Python Plot" />

        <input
          type="text"
          value={inputData}
          onChange={handleInputChange}
        />
        
        <button type="submit">Get Prediction</button>
      </form>

      
      
      {foundItem ? (
             <div id="getp">Predicted Price : Rs {foundItem.Predicted}</div>
      ) : (
        <div id="getp">No item found for the input value</div>
      )}
    </div>
    </Wrapper>
  );
};


const Wrapper = styled.section`



* {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

body { font-family: sans-serif; }


padding: 12rem 0;
img {
  width: 40rem;
   height: 15rem;
   margin-top:-270px;
   margin-left:190px;
 }
 
.img-style {
  width: 100%;
  height: 100%;
}

background-image:
  url(
"images/predict2-transformed.jpeg");
background-repeat:repeat;


}

button {
  padding: 5px 15px;
  background-color: #a5c4b4;
  border: none;
  font-weight: 590;
  border-radius:5%;

  
}
button:hover{
  background-color: #8f9da1;
}


#getp{
   
  display:flex;
  justify-content:center;
  align-items:center;

}

div #getp{

  margin-top:76px;
}



`;

export default PredictionForm;