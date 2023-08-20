import React, { useState } from 'react';
import axios from 'axios';
import styled, { css } from 'styled-components';

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
    <Wrapper className='section'>
    <div>
      <form onSubmit={handleSubmit} id="getp">
        <input
          type="text"
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
        />
        <button type="submit">Get Prediction</button>
      </form>
      <div id="getp">Prediction: {prediction}</div>
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
 width: 18rem;
  height: 35rem;
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
  margin-left:15px;
  
  
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