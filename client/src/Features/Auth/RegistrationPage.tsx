import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import type { User } from './reducer/type';
import { useAppDispatch } from '../../redux/store';

function RegistrationPage(): JSX.Element {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onHandleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    if (password === checkPassword) {
      const { data }: { data: { message: string; userInDb: User } } = await axios.post(
        '/api/auth/registration',
        {
          name,
          email,
          password,
        },
      );

      if (data.message === 'success') {
        dispatch({ type: 'auth/registration', payload: data.userInDb });
        navigate('/');
      }
    }
  };

  return (
    <form className="registration-form" onSubmit={onHandleSubmit}>
      <label htmlFor="name">
        Name:
        <input
          type="text"
          name="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <br />
      <label htmlFor="email">
        Email:
        <input
          type="email"
          name="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <br />
      <label htmlFor="password">
        Password:
        <input
          type="password"
          name="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <label htmlFor="password">
        Check password:
        <input
          type="password"
          name="password"
          required
          value={checkPassword}
          onChange={(e) => setCheckPassword(e.target.value)}
        />
      </label>
      <br />
      <div className="button-container">
        <button type="submit">Sign up</button>
        <Link to="/auth" className="login-button">
          Sign in
        </Link>
      </div>
    </form>
  );
}

export default RegistrationPage;
