import React from 'react'
import styled from "styled-components";


const Main = () => {
  return (
    <Wrapper className= "section">
    <div>
       <main>
    <section className="fruits-section">
    <p id="features">Our Features</p> 
      <div className="grid-container">
        
        <div className="grid-item">
          <img src="https://grocery-store-react.netlify.app/image/feature-img-2.png" alt="Mango"/>
          <h2>Free Delivery</h2>
          
        </div>
        <div className="grid-item">
          <img src="https://grocery-store-react.netlify.app/image/feature-img-1.png" alt="Watermelon"/>
          <h2>Fresh And Organic</h2>

        </div>
        <div className="grid-item">
          <img src="https://grocery-store-react.netlify.app/image/feature-img-3.png" alt="Kivi"/>
          <h2>Easy Payment</h2>

        </div>
      </div>
    </section>
    <p id="para">Our Organic Products</p>

    <div id="allbtn">
        <button type="button" class="btn btn-success">All</button>
        <button type="button" class="btn btn-success-light" id="btns1">Vegetables</button>
        <button type="button" class="btn btn-success-light" id="btns">Fruits</button>
        <button type="button" class="btn btn-success-light" id="btns">Bread</button>
        <button type="button" class="btn btn-success-light" id="btns">Paneer</button>
    </div>
    

    <section className="vegetables-section">
  
      <div className="grid-container"  id="aha">
        <div className="grid-item">
          <img src="https://grocery-store-react.netlify.app/image/product-6.png" alt="Tomato"/>
          <h3>Fresh Avocado</h3>
        </div>
        <div className="grid-item">
          <img src="https://grocery-store-react.netlify.app/image/product-1.png" alt="Broccoli"/>
          <h3>Fresh Orange</h3>
        </div>
        <div className="grid-item">
          <img src="https://img.freepik.com/premium-vector/red-mushrooms_1268-12444.jpg?size=626&ext=jpg&ga=GA1.2.725962523.1691603831&semt=sph" alt="Spinach"/>
          <h3>Fresh Mushroom</h3>
        </div>
        <div className="grid-item">
          <img src="https://grocery-store-react.netlify.app/image/product-7.png" alt="Carrots"/>
          <h3>Fresh Carrots</h3>
        </div>
        <div className="grid-item">
          <img src="https://grocery-store-react.netlify.app/image/product-8.png" alt="Cucumber"/>
          <h3>Fresh Lemon</h3>
        </div>
        <div className="grid-item">
          <img src="https://grocery-store-react.netlify.app/image/product-5.png" alt="Onions"/>
          <h3>Fresh Potato</h3>
        </div>
        <div className="grid-item">
          <img src="https://img.freepik.com/premium-photo/ripe-sweet-ear-corn-isolated_531456-145.jpg?size=626&ext=jpg&ga=GA1.2.725962523.1691603831&semt=sph" alt="Onions"/>
          <h3>Fresh Corn</h3>
        </div>
        <div className="grid-item">
          <img src="https://img.freepik.com/premium-photo/fresh-pineapple-white-background_116067-2716.jpg?size=626&ext=jpg&ga=GA1.2.725962523.1691603831&semt=sph" alt="Onions"/>
          <h3>Fresh Pineapple</h3>
        </div>
      </div>
    </section>
  </main>
  
  
    </div>
    </Wrapper>
  );
};



const Wrapper= styled.section`
body {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin: 0;

  
}

main {
  flex: 1;
  padding: 2rem;
}

/* Improved styling for the main section */
.fruits-section h2,
.vegetables-section h2 {
  color: #3a5d28;
  text-transform: uppercase;
  margin-bottom: 1rem;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-left:150px;
}

.grid-item {
  text-align: center;
  background-color: #f0f8f4;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.grid-item:hover {
  transform: translateY(-5px);
  background-color: #d8ecd8;
}

.grid-item h3 {
  margin-top: 1rem;
  font-size: 20px;
  color: #3a5d28;
}

.grid-item p {
  margin-top: 0.5rem;
  color: #777;
  font-size: 14px;
}

footer {
  background-color: #2a4e1e;
  color: #fff;
  text-align: center;
  padding: 1rem;
  margin-top: auto;
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.footer-logo h2 {
  font-size: 24px;
  margin-bottom: 10px;
  color: #fff;
}

.footer-links ul {
  list-style: none;
  padding: 0;
  display: flex;
}

.footer-links li {
  margin: 0 10px;
}

.footer-links a {
  text-decoration: none;
  color: #fff;
}

.footer-links a:hover {
  text-decoration: underline;
}

.footer-buttons {
  margin-top: 20px;
}

.btn {
  padding: 10px 20px;
  background-color: #3a5d28;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin: 0 5px;
}

.btn:hover {
  background-color: #446e35;
}

.btn-secondary {
  background-color: #777;
}

.btn-secondary:hover {
  background-color: #999;
}

.footer-copy {
  margin-top: 10px;
}

.grid-item {
  text-align: center;
  background-color: #f0f8f4;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  /* Ensure the grid items have a fixed size */
  width: 300px;
  height: 400px;
  /* Center the content vertically */
  display: flex;
  flex-direction: column;
  justify-content: center;
}

/* Add a div to wrap the image and set a max width and height */
.grid-item-image {
  max-width: 100%;
  max-height: 200px;
  margin: 0 auto;
}

.grid-item-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

#features{
  font-size:40px;
}

#para{
  margin-top: 50px;
  font-size:40px;
}

#allbtn{
  margin-left: 900px;
  margin-bottom: 50px;
  margin-top: -60px;
}

#aha{
  margin:auto;
}

`;

export default Main