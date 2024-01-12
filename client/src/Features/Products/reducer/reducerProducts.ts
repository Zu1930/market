/* eslint-disable @typescript-eslint/default-param-last */

import type { Action } from '../../../redux/type';
import type { Product } from '../types/type';

export type StateProducts = {
  products: Product[];
};

export const stateProducts: StateProducts = {
  products: [],
};

const reducerProducts = (state: StateProducts = stateProducts, action: Action): StateProducts => {
  switch (action.type) {
    case 'load/products':
      return {
        ...state,
        products: action.payload,
      };
    case 'add/product':
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case 'delete/product':
      return {
        ...state,
        products: state.products.filter((product) => product.id !== action.payload),
      };
    case 'update/product':
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload ? { ...product, adult: !product.adult } : product,
        ),
      };

    default:
      return state;
  }
};

export default reducerProducts;
