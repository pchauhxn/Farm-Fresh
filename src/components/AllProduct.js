import React from 'react'
import styled from "styled-components";
import ProductCard from './ProductCard'
import img1 from '../../src/components/Assests/broc1.png'
import img2 from '../../src/components/Assests/carrot.png'
import img3 from '../../src/components/Assests/tomato2.jpg'
import img4 from '../../src/components/Assests/mango.png'
import img5 from '../../src/components/Assests/peach.jpg'
import img6 from '../../src/components/Assests/cherry.jpg'
import img7 from '../../src/components/Assests/paneer.jpg'
import img8 from '../../src/components/Assests/cheese.jpg'
import img9 from '../../src/components/Assests/bread (2).jpg'
import img10 from '../../src/components/Assests/dragon fruit (1).jpg'
import img11 from '../../src/components/Assests/pomegranate (2).jpg'
import img12 from '../../src/components/Assests/Rambutan (2).jpg'
import CategorySidebar from './CategorySidebar';

const AllProduct = () => {

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
      productname: 'Paneer',
      productprice : 300,
      counttype : '1 kg',
      discountprecent : 15
    },
    {
      id:8,
      productimage: img8,
      productname: 'Cheese',
      productprice : 80,
      counttype : 'Packet of 10 slice',
      discountprecent : 5
    },
    {
      id:9,
      productimage: img9,
      productname: 'Bread',
      productprice : 40,
      counttype : '1 each',
      discountprecent : 0
    },
    {
      id:10,
      productimage: img10,
      productname: 'Dragon Fruit',
      productprice : 80,
      counttype : '1 each',
      discountprecent : 6
    },
    {
      id:11,
      productimage: img11,
      productname: 'Pomegranate',
      productprice : 140,
      counttype : '1 kg',
      discountprecent : 9
    },
    {
      id:12,
      productimage: img12,
      productname: 'Rambutan',
      productprice : 416,
      counttype : '1 kg',
      discountprecent : 10
    },

  ]
  return (
    <Wrapper className="section">
     <CategorySidebar></CategorySidebar>
    <div className='allproducts'>
    <h1>All Products</h1>
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


export default AllProduct
