import React from 'react';

import './Navbar.css';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { RootState } from '../../redux/store';

function NavbarPage(): JSX.Element {
  const user = useSelector((store: RootState) => store.auth.user);
  return (
    <>
      <nav>
        <ul className="navbar-menu">
          <li>{user?.name}</li>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <Link to="/categories">Categories</Link>
          </li>
          <li>
            <NavLink to="/products">Products</NavLink>
          </li>

          <li>
            <a href="/favorites">Favorites</a>
          </li>
          <li>
            <a href="/cart">Cart</a>
          </li>
          <li>
            <a href="/registration">Sign Up</a>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default NavbarPage;
