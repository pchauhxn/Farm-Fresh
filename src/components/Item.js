import styled from "styled-components";

import React from 'react'

const Item = (props) => {
  return (
    <Wrapper className='section'>
    <div>
      <img src={props.icon}></img>
    </div>
   
    </Wrapper>
  )
}



const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  
  align-items: center;
  height: 250px;
 
  width:800px;
  color: #fff;
  margin: 0 15px;
  font-size: 4em;
  margin-top:120px;
  margin-bottom:50px;

  img{
    height: 400px;
    width: 100%;
    margin-top: 30px;
    margin-bottom: 50px;
   background-color: rgb(209, 224, 219);
  }
`;


export default Item