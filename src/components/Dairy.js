import React from 'react'
import styled from "styled-components";
import ProductCard from './ProductCard'
import img1 from '../../src/components/Assests/paneer.jpg'
import img2 from '../../src/components/Assests/cheese.jpg'
import img3 from '../../src/components/Assests/butter (1).jpg'
import img4 from '../../src/components/Assests/bread (2).jpg'
import img5 from '../../src/components/Assests/curd (2).jpg'
import img6 from '../../src/components/Assests/ghee-removebg-preview.png'
import img7 from '../../src/components/Assests/milk.png'
import img8 from '../../src/components/Assests/lassi.jpg'
import img9 from '../../src/components/Assests/icecream (2).jpg'
import img10 from '../../src/components/Assests/Brown-Bread-PNG-Image-With-Transparent-Background.png'
import img11 from '../../src/components/Assests/png-transparent-chicken-egg-carton-free-range-eggs-salted-duck-egg-chicken-food-animals-chicken-thumbnail-removebg-preview.png'
import img12 from '../../src/components/Assests/chocomilk-removebg-preview.png'
import CategorySidebar from './CategorySidebar';

const Dairy = () => {

  const products = [

    {
         id:1,
         productimage: img1,
         productname: 'Paneer',
         productprice : 300,
         counttype : '1 kg',
         discountprecent : 15

    },
    {
      id:2,
      productimage: img2,
      productname: 'Cheese',
      productprice : 80,
      counttype : 'Packet of 10 slice',
      discountprecent : 5
    },
    {
      id:3,
      productimage: img3,
      productname: 'Butter',
      productprice : 56,
      counttype : '1 packet - 500g',
      discountprecent : 2
    },
    {
      id:4,
      productimage: img4,
      productname: 'White Bread',
      productprice : 40,
      counttype : '1 each',
      discountprecent : 0
    },
    {
      id:5,
      productimage: img5,
      productname: 'Curd',
      productprice : 34,
      counttype : '400 g',
      discountprecent : 3
    },
    {
      id:6,
      productimage: img6,
      productname: 'Ghee - Organic',
      productprice : 485,
      counttype : '500 ml',
      discountprecent : 10
    },
    {
      id:7,
      productimage: img7,
      productname: 'Milk',
      productprice : 33,
      counttype : '500 ml',
      discountprecent : 0
    },
    {
      id:8,
      productimage: img8,
      productname: 'Lassi ',
      productprice : 20,
      counttype : '180 ml',
      discountprecent : 1
    },
    {
      id:9,
      productimage: img9,
      productname: 'Icecream',
      productprice : 50,
      counttype : '120 ml',
      discountprecent : 2
    },
    {
      id:10,
      productimage: img10,
      productname: 'Brown Bread',
      productprice : 45,
      counttype : '400 g',
      discountprecent : 0
    },
    {
      id:11,
      productimage: img11,
      productname: 'Organic Eggs',
      productprice : 350,
      counttype : '30 pieces',
      discountprecent : 30
    },
    {
      id:12,
      productimage: img12,
      productname: 'Chocolate Milk',
      productprice : 80,
      counttype : '180 ml',
      discountprecent : 10
    },

  ]
  return (
    <Wrapper className="section">
     <CategorySidebar></CategorySidebar>
    <div className='allproducts'>
    <h1>Dairy Products</h1>
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


export default Dairy
