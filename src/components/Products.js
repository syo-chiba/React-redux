import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../redux/productsSlice';
import { addItemToCart } from '../redux/cartSlice';

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const status = useSelector((state) => state.products.status);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  return (
    <div>
      <h2>Products</h2>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.title}</h3>
          <button onClick={() => dispatch(addItemToCart(product))}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;