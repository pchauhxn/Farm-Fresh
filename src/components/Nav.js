import React from 'react'
import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import Login from "./Login"
import Cart from './Cart';
import Register from "./Register"
import Product_Sidebar from './Product/Product_Sidebar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

const Nav = () => {
  const [stickyClass, setStickyClass] = useState('');

  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);
    return () => window.removeEventListener('scroll', stickNavbar);
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      // window height changed for the demo
      windowHeight > 150 ? setStickyClass('sticky-nav') : setStickyClass('');
    }
  };

  return (

    <Wrapper className="section">
      <nav className={`navbar navbar-expand-lg navbar-light${stickyClass}`}>
        <Link to="/">
          <a id="black" class="navbar-brand" href="homepage.html" style={{color : 'white'}}>
            <span class="material-symbols-outlined" style={{color : 'white', fontSize: '45px'}} >
            agriculture
          </span></a>
        </Link>
        <Link to="/">
          <a id="black" class="navbar-brand" href="homepage.html" style={{color : 'white'}}><span class="material-symbols-outlined" style={{color : 'white'}} ></span>
          FarmFresh</a>
        </Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent" >
          <ul  class="navbar-nav mr-auto" >
            <li class="nav-item active" >
              <Link to="/">
                <a id="black"class="nav-link" href="web.html" style={{color : 'white'}}>
                  Home
                </a>
              </Link>
            </li>
            <li class="nav-item">
            <Link to="/Shop">
              <a class="nav-link" href="#" style={{color : 'white'}}>Shop</a>
              </Link>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{color : 'white'}}>
                New Arrival
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link to="/vegetable">
                 <a class="dropdown-item" href="#">Vegetables</a>
              </Link>
              <Link to="/fruit">
                <a class="dropdown-item" href="#">Fruits</a>
                </Link>
                <div class="dropdown-divider"></div>
                <Link to="/dairy">
                <a class="dropdown-item" href="#">Other</a>
                </Link>
              </div>
            </li>

          </ul>
          <form class="form-inline my-2 my-lg-0">
            <Link to="/login">
              <button class="btn my-2 my-sm-0 mr-4" type="submit" id="btn-navbar"><a href="login.html">Login</a></button>
            </Link>
            <Link to="/contactus">
              <button class="btn  my-2 my-sm-0" type="submit" id="btn-navbar"><a href="ContactUs.html">Contact</a></button>
            </Link>
            <Link to="/Cart">
            <button type="button" class="btn btn-light" id="cart"><span class="bi bi-cart"></span></button>
            </Link>
          </form>
        </div>
      </nav>
    </Wrapper>


  );
};

const Wrapper = styled.section`



nav{
  background: linear-gradient(-135deg, #02201c, #125212);
  color:white;
 
}

 #cart{
  margin-left:15px;
  background-color:#3a5d28;
  color:white;
}
.dropdown-menu
{
  opacity: 0.8;
  color: white;
  background-color:  #446e35;
  
}
.dropdown-menu a:hover
{
  background-color:  black;
}
.dropdown-menu a{
  
  color: white;
}
#btn-navbar{

  border: 1px solid  #a1a79f;
  background-color: #3a5d28;
  color: #fff;
}

#btn-navbar:hover{
    background-color: #446e35;
}

#btn-navbar a{
    color: white;
    text-decoration: none;
}


.sticky-nav {
  position: fixed;
  top: 0;
  left: 0;
}

.navbar {
  position: relative;
  z-index: 999;
  height: 80px;
  width: 100%;
 
}
.navbar-brand {
  display: inline-block;
  padding-top: 0.3125rem;
  padding-bottom: 0.3125rem;
  margin-right: 1rem;
  font-size: 1.8rem;
  line-height: inherit;
  white-space: nowrap;
}
`

export default Nav
