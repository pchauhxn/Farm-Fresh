import React from 'react'
import styled from "styled-components";

const Nav = () => {


     
  return (
    <Wrapper className = "section">
    <div>
            	<nav classNameName="navbar navbar-expand-lg navbar-light ">
        <a classNameName="navbar-brand" href="homepage.html"><span className="material-symbols-outlined">
            agriculture
            </span>FarmFresh</a>
        <button classNameName="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="web.html">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Shop</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                New Arrival
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">Vegetables</a>
                <a className="dropdown-item" href="#">Fruits</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Other</a>
              </div>
            </li>
           
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <button className="btn my-2 my-sm-0 mr-4" type="submit" id="btn-navbar"><a href="login.html">Login</a></button>
            <button className="btn  my-2 my-sm-0" type="submit" id="btn-navbar"><a href="ContactUs.html">Contact</a></button>
          </form>
        </div>
      </nav>

    </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`

nav{

    background-color: #7da594;

  }
  .dropdown-menu
{
opacity: 0.5;
color: black;
background-color:  rgb(55, 97, 55);
}
.dropdown-menu a{

color: rgb(255, 244, 244);
}

 

`;

export default Nav
