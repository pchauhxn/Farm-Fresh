import styled from "styled-components";
import './App.css';
import Nav from './components/Nav';
import Main from "./components/Main";
import About from "./components/About";
import { NavLink } from 'react-router-dom';
import Login from "./components/Login"
import Register from "./components/Register"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Nav/>  
          <Routes>
          <Route path="/" element={<DefaultComponents />} />
          <Route path="/login" Component={Login} />
          <Route path="/register" Component={Register} />
          </Routes>
        </div>
      </Router>
    </div>

  );
}

const DefaultComponents = () => {
  return (
    <div>
      <About />
      <Main />
    </div>
  );
};
export default App;
