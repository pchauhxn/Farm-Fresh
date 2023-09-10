import React from 'react'
import styled, { css } from 'styled-components';
import img1 from '../../src/components/Assests/milk.png'
import img2 from '../../src/components/Assests/vegetable.png'
import img3 from '../../src/components/Assests/fruit.png'
import img4 from '../../src/components/Assests/exotic.png'
import img5 from '../../src/components/Assests/all.png'
import { Link } from 'react-router-dom';

const CategorySidebar = () => {
  const data = [
    {
        id: 1,
        categoryimage: img5,
        categoryname: 'All Products'
    },
    {
        id: 2,
        categoryimage: img2,
        categoryname: 'Vegetables'
    },
    {
        id: 3,
        categoryimage: img3,
        categoryname: 'Fruits'
    },
    {
        id: 4,
        categoryimage: img4,
        categoryname: 'Exotic Fruits'
    },
    {
        id: 5,
        categoryimage: img1,
        categoryname: 'Dairy Products'
    },
   
]
return (
  <Wrapper className="section">
    <div className='categorysidebar'>
       
    <div className='category'>
    <Link to="/allproduct">
                       <button id="all">
                        <img src={img1}></img>
                        <h2>All Products</h2>
                       </button>
        </Link>
      </div>

      <div className='category'>
      <Link to="/vegetable">
                       <button id="all">
                        <img src={img2}></img>
                        <h2>Vegetable</h2>
                       </button>
      </Link>
      </div>

      <div className='category'>
      <Link to="/fruit">
                       <button >
                        <img src={img3}></img>
                        <h2>Fruits</h2>
                       </button>
        </Link>
      </div>

      <div className='category'>
      <Link to="/dairy">
                       <button>
                        <img src={img5}></img>
                        <h2>Dairy</h2>
                       </button>
                       </Link>
      </div>

      <div className='category'>
      <Link to="/exotic">
                       <button>
                        <img src={img4}></img>
                        <h2>Exotic Fruits</h2>
                       </button>
       </Link>
      </div>

     

    </div>
    </Wrapper>
)
}

const Wrapper = styled.section`

.categorysidebar .category img {
  width: 40px;
  height: 40px;
 margin-top: 90px;
}

.categorysidebar {
  width: 9%;
  height : 70px;
  display: flex;
  flex-direction: column;

  /* border: 1px solid #ccc; */
}

.categorysidebar .category {
  display: flex;
  align-items: center;
  border: 1px solid #e7e7e7;
  padding: 10px 20px;
  background-color: #d2ebc9;
  padding-bottom: 180px;
  flex-wrap: wrap;
  gap: 10px;

}

.categorysidebar .category:hover{
  background-color: #cdffc8;
}

.categorysidebar .category h3{
  /* margin:  0px 20px; */
  font-size: 18px;
  padding: 0px;
  font-weight:600;
}

@media (max-width: 950px)
{
  .categorysidebar {
      width: 40%;
      margin: 20px 0px;
      padding-bottom: 80px;
  }
  
}


@media (max-width: 650px)
{
  .categorysidebar {
      width: 100%;
      margin: 20px 0px;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      gap: 10px;
      max-height: 200px;
      overflow-y: scroll;

  }
  
}

.category button{

  border:none;
  background:none;
  color:black;

  position:relative;
 

  
 
}
.category button h2{
  font-size: 18px;
  padding: 0px;
  font-weight:600;
  padding-top:20px;
  
}

.category button img{

  width: 80px;
  height: 40px;
 margin-top: 90px;

}
#all{
  margin-right:-150px;
  position:relative;
  right:30px;
}



`

export default CategorySidebar
