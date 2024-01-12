import type { User } from '../Features/Auth/reducer/type';
import type { Category } from '../Features/Categories/types/type';
import type { Product, ProductId } from '../Features/Products/types/type';

export type Action =
  | { type: 'load/categories'; payload: Category[] }
  | { type: 'load/products'; payload: Product[] }
  | { type: 'add/product'; payload: Product }
  | { type: 'delete/product'; payload: ProductId }
  | { type: 'update/product'; payload: ProductId }
  | { type: 'auth/registration'; payload: User }
  | { type: 'autch/userCheck'; payload: User }
  | { type: 'auth/login'; payload: User }
  | { type: 'autch/logout'; payload: { message: string } };
