import React from 'react'
import styled from "styled-components";
import ProductCard from './ProductCard'
import img1 from '../../src/components/Assests/dragon fruit (1).jpg'
import img2 from '../../src/components/Assests/guava.png'
import img3 from '../../src/components/Assests/pomegranate (1).jpg'
import img4 from '../../src/components/Assests/star fruit (1).jpg'
import img5 from '../../src/components/Assests/Rambutan (2).jpg'
import img6 from '../../src/components/Assests/durian (1).jpg'
import img7 from '../../src/components/Assests/longan.jpg'
import img8 from '../../src/components/Assests/mangosteen.png'
import img9 from '../../src/components/Assests/sapodilla.jpg'
import img10 from '../../src/components/Assests/Jack Fruit.jpg'
import img11 from '../../src/components/Assests/sugarapple.png'
import img12 from '../../src/components/Assests/persimmon-removebg-preview.png'


import CategorySidebar from './CategorySidebar';

const Exotic = () => {

  const products = [

    {
         id:1,
         productimage: img1,
         productname: 'Dragon Fruit',
         productprice : 80,
         counttype : '1 each',
         discountprecent : 6

    },
    {
      id:2,
      productimage: img2,
      productname: 'Guava',
      productprice : 75,
      counttype : '1 kg',
      discountprecent : 5
    },
    {
      id:3,
      productimage: img3,
      productname: 'Pomegranate',
      productprice : 140,
      counttype : '1 kg',
      discountprecent : 9
    },
    {
      id:4,
      productimage: img4,
      productname: 'Star Fruit',
      productprice : 175,
      counttype : '1 kg',
      discountprecent : 5
    },
    {
      id:5,
      productimage: img5,
      productname: 'Rambutan',
      productprice : 416,
      counttype : '1 kg',
      discountprecent : 10
    },
    {
      id:6,
      productimage: img6,
      productname: 'Durian',
      productprice : 300,
      counttype : '1 kg',
      discountprecent : 3
    },

    {
        id:7,
        productimage: img7,
        productname: 'Longan',
        productprice : 150,
        counttype : '1 each',
        discountprecent : 6

   },
   {
     id:8,
     productimage: img8,
     productname: 'Mangosteen',
     productprice : 105,
     counttype : '1 kg',
     discountprecent : 5
   },
   {
     id:9,
     productimage: img9,
     productname: 'Sapodilla',
     productprice : 180,
     counttype : '1 kg',
     discountprecent : 9
   },
   {
     id:10,
     productimage: img10,
     productname: 'Jack Fruit',
     productprice : 90,
     counttype : '1 kg',
     discountprecent : 5
   },
   {
     id:11,
     productimage: img11,
     productname: 'Sugar Apple',
     productprice : 450,
     counttype : '1 kg',
     discountprecent : 10
   },
   {
     id:12,
     productimage: img12,
     productname: 'Persimmon',
     productprice : 350,
     counttype : '1 kg',
     discountprecent : 3
   },
  ]
  return (
    <Wrapper className="section">
     <CategorySidebar></CategorySidebar>
    <div className='allproducts'>
    <h1>Exotix Fruits</h1>
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


export default Exotic
