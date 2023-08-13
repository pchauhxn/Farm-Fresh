import styled from "styled-components";
import './App.css';
import Nav from './components/Nav';
import Main from "./components/Main";
import About from "./components/About";
import Item from "./components/Item";
import { NavLink } from 'react-router-dom';
import Login from "./components/Login"
import Register from "./components/Register"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contactus from "./components/Contactus";
import Carousel from "react-elastic-carousel";
import 'bootstrap/dist/css/bootstrap.min.css';


import image from './image/carousel.gif';
import image2 from './image/carousel2.gif';
import image3 from './image/carousel3.gif';
import Images3 from "./components/Images3";

import Shop from "./components/Shop";
import Product_Sidebar from "./components/Product/Product_Sidebar";
import AllProduct from "./components/AllProduct";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 2 },
];

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
          <Route path="/contactus" Component={Contactus} />
          <Route path="/shop" Component={Shop} />
          <Route path="/product" Component={Product_Sidebar} />
          <Route path="/allproduct" Component={AllProduct} />
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
      
      <Carousel breakPoints={breakPoints} style={{backgroundColor:'rgb(209, 224, 219)'}}>
      <Item icon={image}></Item>
      <Item icon={image2}></Item>
      <Item icon={image3}></Item>
        </Carousel>
        <Images3></Images3>
      <Main />
    </div>
  );
};
export default App;
