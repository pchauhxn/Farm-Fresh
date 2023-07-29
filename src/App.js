import styled from "styled-components";
import './App.css';
import Nav from './components/Nav';
import Main from "./components/Main";
import About from "./components/About";
import { NavLink } from 'react-router-dom';
import Login from "./components/Login"
import Register from "./components/Register"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      
      <Router>
      <Nav></Nav>
      <About></About>
      <Main></Main>
      
     
                </Router>
   
</div>


  );
}

export default App;
