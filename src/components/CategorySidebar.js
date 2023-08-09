import React from 'react'
import styled, { css } from 'styled-components';
import img1 from '../../src/components/Assests/milk.png'
import img2 from '../../src/components/Assests/vegetable.png'
import img3 from '../../src/components/Assests/fruit.png'
import img4 from '../../src/components/Assests/exotic.png'
import img5 from '../../src/components/Assests/all.png'


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
        {
            data.map((item) => {
                return (
                    <div className='category'>
                        <img src={item.categoryimage} alt='categoryimage' />
                        <h3>{item.categoryname}</h3>
                    </div>
                )
            })
        }
    </div>
    </Wrapper>
)
}

const Wrapper = styled.section`
.categorysidebar .category img {
  width: 40px;
  height: 40px;
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
  padding: 30px 20px;
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
  

`

export default CategorySidebar
