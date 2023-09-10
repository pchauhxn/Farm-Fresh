import React, { useState } from 'react';
import axios from 'axios';
import styled, { css } from 'styled-components';
import img1 from '../../src/components/Assests/output.png'

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
    { id: 8, name: 'califlower', Predicted: 66.48 },
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


  // const handleInputChange = (event) => {
  //   const value = event.target.value;
  //   setInputData(value);

  //   // Find the item in the array based on the input value
  //   const item = items.find(item => item.name === value);
  //   setFoundItem(item);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/predict', { inputData });
      setPrediction(response.data.prediction);
    } catch (error) {
      console.error('Error fetching prediction:', error);
    }
  };

  // const generateRandomNumber = () => {
  //   const newRandomNumber = Math.floor(Math.random() * 200) + 1; // Generates a random number between 1 and 100
  //   setRandomNumber(newRandomNumber);
  //   setVegetable(inputData);
  // };
  return (
    <Wrapper className='section'>
      <div>
        <img id="plot" src={img1} alt="Python Plot" />
      </div>
      <div className='abc'>

        {/* <button onClick={() => setShow(!show)} className='text-white text-xl font-Quicksand p-2 pb-5 bg-red-500/70 hover:bg-red-400/70 h-[100px] w-[120px] rounded-xl'>Toggle Form and Graph</button> */}
        {/* {!show ?  */}
        <form method="POST" onSubmit={handleSubmit}>
          <p className="text-white text-xl">Vegetable:</p>
          <select id="Vegetable" name="Vegetable">
            <option value="potato">Potato</option>
            <option value="tomato">Tomato</option>
            <option value="pointed grourd">Pointed Grourd</option>
            <option value="Radish">Raddish</option>
            <option value="Bitter Gourd">Bitter Gourd</option>
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
          </select><br />
          <input className='text-white text-4xl font-Quicksand p-2 pb-5 rounded-2xl bg-red-900/50 hover:bg-red-800/50 h-[60px] w-[180px]' type='submit' value='Prediction' />
        </form> : null
        {/* } */}
        {/* {outputData && <p className="text-white text-xl">{outputData.output}</p>} */}
      </div>


      {/* <form onSubmit={handleSubmit} id="getp">
        <input
          type="text"
          value={inputData}
          onChange={handleInputChange}
        />

        <button type="submit">Get Prediction</button>
        {foundItem ? (
          <div id="getp">Predicted Price : Rs {foundItem.Predicted}</div>
        ) : (
          <div id="getp">No item found for the input value</div>
        )}
      </form> */}




    </Wrapper >
  );
};


const Wrapper = styled.section`



* {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

body { font-family: sans-serif; }


padding: 12rem 0;
img {        width: 54rem;
  height: 22rem;
  margin-top: -173px;
  margin-left: 127px;
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