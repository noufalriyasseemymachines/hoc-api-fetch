import React, { useContext } from 'react';
import './ItemList.css';
import { UserContext } from '../Context/Context';

const ItemList = ({ data }) => {
  const value=useContext(UserContext)
  console.log(value.theme
  )

  return (
    <div className='product-list'>
      <h2>Product List</h2>
      <div className='grid-container'>
        {data.map((item) => (
          <div className={value.theme? "product-card-dark":"product-card-light"} key={item.id}>
            <img src={item.image} alt={item.title} className='product-image' />
            <h3>{item.title}</h3>
            <p>Price: ${item.price}</p>
            <p>Rating:{item.rating.rate}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
