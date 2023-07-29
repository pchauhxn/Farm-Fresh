import React from 'react'
import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';


const About = () => {
  return (
    <div>
        <Wrapper className='section'>
        <section className='sec'>
        <div className='container'>
            
        <div className="grid grid-two-column">
            <div className="hero-section-data" >
            <p className="intro-data">Welcome to </p>
                <h1>Farm Fresh</h1>
                <p>Enjoy a wonderful experience with fresh Organic Veggies for a healthy lifestyle.<br/>
                    Eat farm-fresh veggies&Foods that have extraordinary flavours<br/> to make your life healthier for today and in future. </p>
             <NavLink to="/">
                <button>Shop Now</button>
             </NavLink>
            </div>
            <div className="hero-section-image">
        
            </div>
        </div>
     </div>
     </section>
        </Wrapper>
      
    </div>
  )
}


const Wrapper = styled.section`
padding: 12rem 0;
img {
 width: 18rem;
  height: 15rem;
}
.hero-section-data {
  box-sizing:border-box;
  p {
    margin: 2rem 0;
    font-size:20px;
    box-sizing:border-box;
    
  }
  h1 {
    text-transform: capitalize;
    font-weight: bold;
  }
  .intro-data {
    margin-bottom: 0;
    font-size: 30px;
  }
}
.hero-section-image {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
figure {
  position: relative;
  &::after {
    content: "";
    width: 60%;
    height: 80%;
    background-color: rgba(81, 56, 238, 0.4);
    position: absolute;
    left: 50%;
    top: -5rem;
    z-index: -1;
  }
}
.img-style {
  width: 100%;
  height: auto;
}

background-image:
  url(
"images/wepik-export-20230729073329A68i.png");
background-repeat:no-repeat;
background-size: "cover";

}
`;

export default About
/*
 <figure>
            <img src="images\healthy-vegetables.jpg" alt="hero-section-photo" className="img-style"/>
         </figure>  */