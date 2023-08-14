import React from 'react'
import styled from "styled-components";
import { Link } from 'react-router-dom';


import {useLocation, useNavigate} from 'react-router-dom';



const Main = () => {
  const location=useLocation();
  return (
    <Wrapper className= "section">
    <div>
       <main>
    <section className="fruits-section">
      <h2>Fruits</h2>
      <div className="grid-container">
        <div className="grid-item">
          <img src="https://img.freepik.com/free-photo/apples-red-fresh-mellow-juicy-perfect-whole-white-desk_179666-271.jpg?size=626&ext=jpg&ga=GA1.2.102580417.1689054100&semt=sph" alt="Apple"/>
          <h3>Apple</h3>
          <p>Apples are delicious and nutritious fruits packed with fiber, vitamins, and antioxidants. They come in various varieties, each with its unique flavor and texture.</p>
        </div>
        <div className="grid-item">
          <img src="https://t3.ftcdn.net/jpg/00/33/88/02/240_F_33880235_4SaVkmhk6tEVPoG8zoWItRrBjj3ukkle.jpg" alt="Banana"/>
          <h3>Banana</h3>
          <p>Bananas are a popular choice for a quick energy boost. They are rich in potassium, vitamins, and essential minerals, making them a perfect on-the-go snack.</p>
        </div>
        <div className="grid-item">
          <img src="https://img.freepik.com/free-photo/orange-white-white_144627-16571.jpg?size=626&ext=jpg&ga=GA1.2.102580417.1689054100&semt=sph" alt="Orange"/>
          <h3>Orange</h3>
          <p>Oranges are known for their high vitamin C content, which boosts the immune system. They have a refreshing citrus flavor and are a great addition to a balanced diet.</p>
        </div>
        <div className="grid-item">
          <img src="https://img.freepik.com/premium-photo/cut-intact-mangoes-dark-background_186367-2813.jpg?size=626&ext=jpg&ga=GA1.1.102580417.1689054100&semt=sph" alt="Mango"/>
          <h3>Mango</h3>
          <p>Mango is the national fruit of India which is loved by one and all. It is a very juicy, pulpy and luscious fruit. Ripe mangoes can either be consumed raw or in the form of salad, juice, jams, milkshake or pickles.</p>
        </div>
        <div className="grid-item">
          <img src="https://img.freepik.com/premium-photo/sweet-watermelon-isolated_253984-4202.jpg?size=626&ext=jpg&ga=GA1.1.102580417.1689054100&semt=sph" alt="Watermelon"/>
          <h3>Watermelon</h3>
          <p>“Where there's watermelon, there's summer vibes.” “Oh, to be eating watermelon on a summer day.” “The category is fruit.” “If you're not putting watermelon on your charcuterie board, you're doing it wrong.”</p>
        </div>
        <div className="grid-item">
          <img src="https://img.freepik.com/free-photo/fresh-kiwi-fruit-isolated_144627-30034.jpg?size=626&ext=jpg&ga=GA1.1.102580417.1689054100&semt=sph" alt="Kivi"/>
          <h3>Kivi</h3>
          <p>kiwi, (Actinidia deliciosa), also called kiwifruit or Chinese gooseberry, woody vine and edible fruit of the family Actinidiaceae. The fruit has a slightly acid taste and can be eaten raw or cooked.</p>
        </div>
      </div>
    </section>


    <section className="vegetables-section">
      <h2>Vegetables</h2>
      <div className="grid-container">
        <div className="grid-item">
          <img src="https://img.freepik.com/free-photo/tomatoes_144627-15411.jpg?size=626&ext=jpg&ga=GA1.2.102580417.1689054100&semt=sph" alt="Tomato"/>
          <h3>Tomato</h3>
          <p>Carrots are a rich source of beta-carotene and vitamin A, promoting healthy vision and skin. They add a natural sweetness to dishes and can be enjoyed raw or cooked.</p>
        </div>
        <div className="grid-item">
          <img src="https://img.freepik.com/free-photo/fresh-broccoli-vegetable_144627-20156.jpg?size=626&ext=jpg&ga=GA1.1.102580417.1689054100&semt=sph" alt="Broccoli"/>
          <h3>Broccoli</h3>
          <p>Broccoli is a highly nutritious vegetable with various health benefits. It is packed with vitamins, minerals, and fiber, contributing to overall well-being.</p>
        </div>
        <div className="grid-item">
          <img src="https://img.freepik.com/free-photo/fresh-spinach-leaves-bowl-isolated_144627-30027.jpg?size=626&ext=jpg&ga=GA1.1.102580417.1689054100&semt=sph" alt="Spinach"/>
          <h3>Spinach</h3>
          <p>Spinach is a nutrient-rich leafy green that contains iron, calcium, and vitamins. It can be incorporated into salads, smoothies, and various dishes for a boost of nutrition.</p>
        </div>
        <div className="grid-item">
          <img src="https://img.freepik.com/free-photo/stack-carrots-bowl-marble_114579-65075.jpg?size=626&ext=jpg&ga=GA1.1.102580417.1689054100&semt=sph" alt="Carrots"/>
          <h3>Carrots</h3>
          <p>Carrot is a vegetable and sweet in taste.It is used in making a lot of dishes.Carrot is also used as salad. In many parts of India, it is used to make sweet Halwa which is very tasty.</p>
        </div>
        <div className="grid-item">
          <img src="https://img.freepik.com/free-photo/fresh-cucumbers-sliced-dark-background_1150-45030.jpg?size=626&ext=jpg&ga=GA1.1.102580417.1689054100&semt=sph" alt="Cucumber"/>
          <h3>Cucumber</h3>
          <p>The cucumber is a vegetable plant that people often make into pickles. It is related to melons, squashes, and pumpkins. The scientific name of the cucumber is Cucumis sativus. People grow cucumbers all over the world.</p>
        </div>
        <div className="grid-item">
          <img src="https://img.freepik.com/free-photo/top-view-basket-full-whole-cut-red-onions-wooden-background-with-copy-space_141793-5894.jpg?size=626&ext=jpg&ga=GA1.1.102580417.1689054100&semt=sph" alt="Onions"/>
          <h3>Onions</h3>
          <p>Onions are loaded with plant chemicals including flavonoids, which have both an antioxidant and anti-inflammatory effect. When consumed regularly and in sufficient quantity, these compounds may help protect against chronic conditions such as cancer and diabetes.</p>
        </div>
      </div>
    </section>
  </main>
  
  <footer>
    <div className="footer-content">
      <div className="footer-logo">
        <h2>Fruits & Vegetables</h2>
      </div>
      <div className="footer-links">
        <ul>
          <li><a href="#">Home</a></li>
          <Link to="/fruit"><li>Fruits</li></Link>
          <Link to="/vegetable"> <li><a href="#">Vegetables</a></li></Link>
          <li><a href="#">About Us</a></li>
          <Link to="/contactus"> <li><a href="#">Contact</a></li></Link>
        </ul>
      </div>
      <div className="footer-buttons">
        <button class="btn">Subscribe</button>
        <button class="btn btn-secondary">Feedback</button>
      </div>
    </div>
    <p className="footer-copy">&copy; 2023 Fruits & Vegetables Store. All rights reserved.</p>
  </footer>
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
`;

export default Main