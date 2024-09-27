import React, { useContext } from 'react'
import './cart.css';
import { StoreContext } from '../../context/StoreContext';

const Cart = () => {

  const { food_list, cartItems, removeFromCart } = useContext(StoreContext);
  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br/>
        <hr/>
        {food_list.map((foodItem, index) => {

          if(cartItems[foodItem._id] > 0){
            return(
              <div className='cart-items-title cart-items-item'>
                <img src={foodItem.image} alt="foodItemImage" />
                <p>{foodItem.name}</p>
              </div>
            )
          }
        })}
      </div>
    </div>
  )
}

export default Cart