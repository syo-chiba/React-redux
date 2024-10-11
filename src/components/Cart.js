import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItemFromCart } from '../redux/cartSlice';

const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Shopping Cart</h2>
      {items.map((item) => (
        <div key={item.id}>
          <span>{item.title}</span>
          <span> x {item.quantity}</span>
          <button onClick={() => dispatch(removeItemFromCart(item.id))}>
            Remove
          </button>
        </div>
      ))}
      <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
    </div>
  );
};

export default Cart;