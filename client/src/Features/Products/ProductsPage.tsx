import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ProductItem from './ProductItem';
import { useSelector } from 'react-redux';
import AddProduct from './AddProduct';
import type { RootState } from '../../redux/store';

function ProductsPage(): JSX.Element {
  const products = useSelector((store: RootState) => store.products.products);
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <AddProduct />
      {id
        ? products
            .filter((product) => product.category_id === +id)
            .map((product) => <ProductItem product={product} key={product.id} />)
        : products.map((product) => <ProductItem product={product} key={product.id} />)}
      <button type="button" onClick={() => navigate(-1)}>
        Назад
      </button>
    </div>
  );
}

export default ProductsPage;

// rfce
