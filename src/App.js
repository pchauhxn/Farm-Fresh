import styled from "styled-components";
import './App.css';
import Nav from './components/Nav';
import Main from "./components/Main";
import Login from "./components/Login"
import Register from "./components/Register"

import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
        <Nav></Nav>
    <Main></Main>
   <Login></Login>
    <Register></Register>
</div>

  );
}

export default App;
