/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import CategoriesPage from '../Features/Categories/CategoriesPage';
import ProductsPage from '../Features/Products/ProductsPage';

import './App.css';
import NavbarPage from '../Features/Navbar/NavbarPage';
import Main from '../Features/Main/Main';
import RegistrationPage from '../Features/Auth/RegistrationPage';
import { useAppDispatch } from '../redux/store';

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    axios
      .get('/api/products')
      .then(({ data }) => dispatch({ type: 'load/products', payload: data }))
      .catch(console.log);
    axios
      .get('/api/categories')
      .then(({ data }) => dispatch({ type: 'load/categories', payload: data }))
      .catch(console.log);

    axios
      .get('/api/auth/check')
      .then(({ data }) => dispatch({ type: 'autch/userCheck', payload: data }))
      .catch(console.log);
  }, [dispatch]);

  // очень важно не забытЬ!

  return (
    <div className="App">
      <h1>Доброе утро, ежики!</h1>
      <Routes>
        <Route path="/" element={<NavbarPage />}>
          <Route path="/" element={<Main />} />
          <Route path="/categories/:id/products" element={<ProductsPage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/favorites" />
          <Route path="/cart" />
          <Route path="/registration" element={<RegistrationPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
