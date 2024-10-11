import React from 'react';
import { useDispatch } from 'react-redux';
import { addItemToCart, removeItemFromCart } from '../redux/cartSlice';

const CartItem = ({ id, title, quantity, price }) => {
  const dispatch = useDispatch();

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', margin: '10px 0' }}>
      <div>
        <h3>{title}</h3>
        <span>単価: ${price.toFixed(2)}</span>
        <div>
          <button
            onClick={() => dispatch(removeItemFromCart(id))}
            style={{ margin: '5px' }}
          >
            -
          </button>
          <span>数量: {quantity}</span>
          <button
            onClick={() => dispatch(addItemToCart({ id, title, price }))}
            style={{ margin: '5px' }}
          >
            +
          </button>
        </div>
      </div>
      <span>合計: ${(quantity * price).toFixed(2)}</span>
    </div>
  );
};

export default CartItem;