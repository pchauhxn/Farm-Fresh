import styled from "styled-components";
import './App.css';
import Nav from './components/Nav';
import Login from "./components/Login";
import Register from "./components/Register";
function App() {
  return (
    <div className="App">
    <Login></Login>
    <Register></Register>
    </div>
  );
}

export default App;
