import React from 'react'
import styled from "styled-components";
import { useState } from 'react';

const ProductCard = ({data}) => {
    const [count, setCount] = useState(1)


  const addtocart = () => {
    let cart = JSON.parse(localStorage.getItem('cart'))
    let productdata = data
    if (cart) {
      let itemincart = cart.find(item => item.productdata.id === productdata.id)
      if (itemincart) {
        cart = cart.map(item => {
          if (item.productdata.id === productdata.id) {
            return {
              ...item,
              quantity: item.quantity + count
            }
          }
          else {
            return item
          }
        })
        localStorage.setItem('cart', JSON.stringify(cart))
      }
      else {
        cart = [
          ...cart,
          {
            productdata,
            quantity: count
          }
        ]
        localStorage.setItem('cart', JSON.stringify(cart))
      }
    }
    else {
      cart = [{
        productdata,
        quantity: count
      }]

      localStorage.setItem('cart', JSON.stringify(cart))
    }
    window.location.reload()

  }
  return (
    <Wrapper className="section">
    <div className='product'>
      <div className="s1">
        <img src={data.productimage} alt={'no img'}></img>
      </div>
      <div className="s2">
     
        {
            <span> Rs. {data.productprice - (data.productprice * data.discountprecent/ 100 )}</span>
        }
        <h3><span>Rs.{data.productprice}</span></h3>
        <p>
            {
                data.productname
            }

        </p>

      </div>

      <div className="s3">
        <p>{data.counttype}</p>
      </div>

      <div className="addbtn" onClick={() => {
                addtocart()
              }}>
     
        <span class="material-symbols-outlined">
      add_shopping_cart
      </span>
      
      </div>
     

    </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`

.product{
    display:flex;
    width:250px;
    height:300px;
    flex-direction:column;
    justify-content:space-between;
    align-items:center; 
    margin:69px;
    
    position:relative;
    left:200px;
    border-radius:5px;
    background-color: white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

}

.product .s1{
    height:65%;
    width:100%;  
    overflow:hidden;
}

.product .s1 img{
    width:100%;
    height:100%;
    object-fit: contain;
    transition: all 0.5s ease;
 

}

.product .s1 img:hover {
    scale: 1.1;
}

.product .s2 {
    height: 20%;
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: center;

}

.product h3 {
    font-size: 18px;
    font-weight: 700;
    margin: 0px;
    width: 90%;
}

.product h3 span {
    text-decoration: line-through;
    font-size: 15px;
    color: gray;
    margin-left: 5px;
}

.product .s2 p {
    font-size: 18px;
    font-weight: 700;
    margin: 0px;
    width: 90%;
}

.product .s3 {
    height: 15%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 5px 0px;
}

.product .s3 p {
    font-size: 15px;
    font-weight: 500;
    margin: 0px;
    /* background-color: var(--col1); */
    padding: 5px 0px;
    border-radius: 5px;
    color: #5b5b5b;
    width: 90%;
}

.product .addbtn {
    position: absolute;
    top: 50%;
    right: 5px;
    display: flex;
    flex-direction: column;
    gap: 10px;
}


.product .addbtn span{
    width:30px;
    height:30px;
    background-color: white;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
    border-radius: 20%;
    padding: 3px;
    
    transition: all 0.5s ease;
}

.product .addbtn span:hover {
    

    transform: scale(1.2);
    cursor: pointer;
}

button {

   font-size:13px;
   padding:5px 20px;
   margin-bottom:10px;
   background-color:rgb(212, 54, 54);
   color:white;

}

button:hover{
    background-color:rgb(177, 80, 80);
}


`


export default ProductCard
