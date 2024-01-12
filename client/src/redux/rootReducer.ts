import { combineReducers } from 'redux';
import reducerCategories from '../Features/Categories/reducer/reducerCategories';
import reducerProducts from '../Features/Products/reducer/reducerProducts';
import reducerAuth from '../Features/Auth/reducer/reducerAuth';

const rootReducer = combineReducers({
  categories: reducerCategories,
  products: reducerProducts,
  auth: reducerAuth,
});

export default rootReducer;
