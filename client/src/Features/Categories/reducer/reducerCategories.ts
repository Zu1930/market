/* eslint-disable @typescript-eslint/default-param-last */

import type { Action } from '../../../redux/type';
import type { Category } from '../types/type';

export type StateCategories = {
  categories: Category[];
};

export const stateCategories: StateCategories = {
  categories: [],
};

const reducerCategories = (
  state: StateCategories = stateCategories,
  action: Action,
): StateCategories => {
  switch (action.type) {
    case 'load/categories':
      return {
        ...state,
        categories: action.payload,
      };

    default:
      return state;
  }
};

export default reducerCategories;
