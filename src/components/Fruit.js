import React from 'react'
import styled from "styled-components";
import ProductCard from './ProductCard'
import img1 from '../../src/components/Assests/apple__2_-removebg-preview.png'
import img2 from '../../src/components/Assests/banana (1).jpg'
import img3 from '../../src/components/Assests/grapes (1).jpg'
import img4 from '../../src/components/Assests/mango.png'
import img5 from '../../src/components/Assests/peach.jpg'
import img6 from '../../src/components/Assests/cherry.jpg'
import img7 from '../../src/components/Assests/kiwi 2.jpg'
import img8 from '../../src/components/Assests/lemon (1).jpg'
import img9 from '../../src/components/Assests/orange (1).jpg'
import img10 from '../../src/components/Assests/pineapple__1_-removebg-preview.png'
import img11 from '../../src/components/Assests/strawberry (2).jpg'
import img12 from '../../src/components/Assests/watermelon__1_-removebg-preview.png'
import CategorySidebar from './CategorySidebar';

const Fruit = () => {

  const products = [

    {
         id:1,
         productimage: img1,
         productname: 'Apple',
         productprice : 229,
         counttype : '4 pcs',
         discountprecent : 5

    },
    {
      id:2,
      productimage: img2,
      productname: 'Banana',
      productprice : 55,
      counttype : '6 pcs',
      discountprecent : 2
    },
    {
      id:3,
      productimage: img3,
      productname: 'Grapes',
      productprice : 269,
      counttype : '1 kg',
      discountprecent : 27
    },
    {
      id:4,
      productimage: img4,
      productname: 'Mango',
      productprice : 80,
      counttype : '1 kg',
      discountprecent : 5
    },
    {
      id:5,
      productimage: img5,
      productname: 'Peach',
      productprice : 230,
      counttype : '1 kg',
      discountprecent : 12
    },
    {
      id:6,
      productimage: img6,
      productname: 'Cherry',
      productprice : 400,
      counttype : '1 kg',
      discountprecent : 10
    },
    {
      id:7,
      productimage: img7,
      productname: 'Kiwi',
      productprice : 57,
      counttype : '1 pc',
      discountprecent : 13
    },
    {
      id:8,
      productimage: img8,
      productname: 'Lemon - Organic',
      productprice : 215,
      counttype : '1 kg',
      discountprecent : 23
    },
    {
      id:9,
      productimage: img9,
      productname: 'Orange',
      productprice : 304,
      counttype : '6 pcs',
      discountprecent : 28
    },
    {
      id:10,
      productimage: img10,
      productname: 'Pineapple',
      productprice : 128,
      counttype : '1 pc',
      discountprecent : 24
    },
    {
      id:11,
      productimage: img11,
      productname: 'Strawberry',
      productprice : 100,
      counttype : '1 kg',
      discountprecent : 9
    },
    {
      id:12,
      productimage: img12,
      productname: 'Watermelon',
      productprice : 146,
      counttype : '1 pc',
      discountprecent : 25
    },

  ]
  return (
    <Wrapper className="section">
     <CategorySidebar></CategorySidebar>
    <div className='allproducts'>
    <h1>Fruits</h1>
    <div className='products'>
        {
            products.map((item,index) => {
                return (
                    <ProductCard data={item} key={item.id}/>
                    
                )
            })
        }
    </div>
    
 
      

</div>
</Wrapper>
  )
}



const Wrapper = styled.section`
background-color: #f0f8f4;
.allproducts{
  display: flex;
  flex-direction: column;
  width: 78%;
}

.allproducts h1{
  font-size: 30px;
  position : relative;
  left:180px;

 
}


.allproducts .products{
  display: flex;
  flex-wrap:wrap;

  justify-content: center;
}

@media (max-width: 950px)
{
  .allproducts{
      width: 60%;
  }
  
}



@media (max-width: 650px)
{
  .allproducts{
      width: 100%;
  }
  
  
}

.parts-sec{

  display:flex;
  justify-content:center;
  align-items:center; 
  gap:10px;
  margin-left:390px;
  margin-top:-20px;


}

button{
  background-color: #446e35;
  color:white;
}

`


export default Fruit
