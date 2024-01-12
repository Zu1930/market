/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-misused-promises */

import React, { useCallback } from 'react';
import axios from 'axios';
import type { Product, ProductId } from './types/type';
import ModalWindow from '../Modal/ModalPage';

import './product.css';
import { useAppDispatch } from '../../redux/store';

type ProductItemProps = {
  product: Product;
};

function ProductItem({ product }: ProductItemProps): JSX.Element {
  // const [isModalOpen, setModalOpen] = useState(false);
  const dispatch = useAppDispatch();

  const deleteProduct = async (id: ProductId): Promise<void> => {
    const { data }: { data: { message: string } } = await axios.delete(
      `/api/products/${id}/destroy`,
    );
    if (data.message === 'success') {
      dispatch({ type: 'delete/product', payload: id });
    }
  };

  const onHandleUpdate = async (id: ProductId): Promise<void> => {
    const res = await fetch(`/api/products/update/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ adult: !product.adult }),
    });

    const data: { message: string } = await res.json();
    if (data.message === 'success') {
      // dispatch({ type: 'update/product', payload: id });
    }
  };
  const openModal = (): void => {
    // setModalOpen(true);
  };
  const openModalCallback = useCallback(openModal, []);

  const closeModal = (): void => {
    // setModalOpen(false);
  };

  return (
    <div className="card">
      <div className="card-content">
        <h3 className="card-title">{product.title}</h3>
        <img className="card-image" src={product.image} alt="Pig" />
        <p className="card-description">{product.price}</p>
        <label htmlFor="adult">
          Игрушка для взрослых
          <input
            type="checkbox"
            checked={product.adult}
            onChange={() => onHandleUpdate(product.id)}
          />
        </label>
        <button type="button" className="card-button" onClick={openModalCallback}>
          Удалить
        </button>
        <ModalWindow>
          {/* <button type="button" onClick={() => deleteProduct(product.id)}>
          удалить
        </button> */}
          <h2>Вы точно хотите удалить?</h2>
          <button className="card-button" type="button" onClick={() => deleteProduct(product.id)}>
            да
          </button>
          <button type="button" className="card-button" onClick={closeModal}>
            нет
          </button>
        </ModalWindow>
      </div>
    </div>
  );
}

export default ProductItem;
