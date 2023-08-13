import React from 'react'
import styled from "styled-components";
import ProductCard from './ProductCard'
import img1 from '../../src/components/Assests/broc1.png'
import img2 from '../../src/components/Assests/carrot.png'
import img3 from '../../src/components/Assests/tomato2.jpg'
import img4 from '../../src/components/Assests/brinjal (1).jpg'
import img5 from '../../src/components/Assests/capsicum__2_-removebg-preview.png'
import img6 from '../../src/components/Assests/cauliflower (2).jpg'
import img7 from '../../src/components/Assests/spinach1-removebg-preview.png'
import img8 from '../../src/components/Assests/cucumbar2.jpg'
import img9 from '../../src/components/Assests/mushroom2.jpg'
import img10 from '../../src/components/Assests/onion__2_-removebg-preview.png'
import img11 from '../../src/components/Assests/peas (1).jpg'
import img12 from '../../src/components/Assests/potato (2).jpg'
import CategorySidebar from './CategorySidebar';

const Vegetable = () => {

  const products = [

    {
         id:1,
         productimage: img1,
         productname: 'Broccoli',
         productprice : 70,
         counttype : '1 kg',
         discountprecent : 10

    },
    {
      id:2,
      productimage: img2,
      productname: 'Carrot',
      productprice : 64,
      counttype : '1 kg',
      discountprecent : 12
    },
    {
      id:3,
      productimage: img3,
      productname: 'Tomato',
      productprice : 200,
      counttype : '1 kg',
      discountprecent : 19
    },
    {
      id:4,
      productimage: img4,
      productname: 'Brinjal',
      productprice : 20,
      counttype : '1 kg',
      discountprecent : 4
    },
    {
      id:5,
      productimage: img5,
      productname: 'Capsicum',
      productprice : 100,
      counttype : '1 kg',
      discountprecent : 6
    },
    {
      id:6,
      productimage: img6,
      productname: 'Cauliflower',
      productprice : 40,
      counttype : '1 kg',
      discountprecent : 4
    },
    {
      id:7,
      productimage: img7,
      productname: 'Spinach',
      productprice : 74,
      counttype : '1 kg',
      discountprecent : 5
    },
    {
      id:8,
      productimage: img8,
      productname: 'Cucumbar',
      productprice : 15,
      counttype : 'Packet of 10 slice',
      discountprecent : 3
    },
    {
      id:9,
      productimage: img9,
      productname: 'Mushroom',
      productprice : 175,
      counttype : '1 each',
      discountprecent : 2
    },
    {
      id:10,
      productimage: img10,
      productname: 'Onion',
      productprice : 40,
      counttype : '1 each',
      discountprecent : 6
    },
    {
      id:11,
      productimage: img11,
      productname: 'Peas',
      productprice : 120,
      counttype : '1 kg',
      discountprecent : 4
    },
    {
      id:12,
      productimage: img12,
      productname: 'Potato',
      productprice : 30,
      counttype : '1 kg',
      discountprecent : 4
    },

  ]
  return (
    <Wrapper className="section">
     <CategorySidebar></CategorySidebar>
    <div className='allproducts'>
    <h1>Vegetables</h1>
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


export default Vegetable
