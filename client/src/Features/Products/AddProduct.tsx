/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useState } from 'react';
import axios from 'axios';
import type { Product } from './types/type';
import './form.css';
import { useAppDispatch } from '../../redux/store';

function AddProduct(): JSX.Element {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [price, setPrice] = useState('');
  const dispatch = useAppDispatch();

  const onHandleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    const { data }: { data: { message: string; product: Product } } = await axios.post(
      '/api/products',
      {
        title,
        image,
        price,
      },
    );

    if (data.message === 'success') {
      dispatch({ type: 'add/product', payload: data.product });
      setTitle('');
      setImage('');
      setPrice('');
    }
  };

  return (
    <form className="add-item-form" onSubmit={onHandleSubmit}>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
      <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
      <button type="submit">Отправить</button>
    </form>
  );
}

export default AddProduct;
