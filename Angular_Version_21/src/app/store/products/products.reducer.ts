import { createReducer, on } from '@ngrx/store';
import * as ProductActions from './products.action';

export interface ProductState {
  products: any[];
}

export const initialState: ProductState = {
  products: [],
};

export const productsReducer = createReducer(
  initialState,
  on(ProductActions.loadProducts, (state) => ({
    ...state,
    products: [
      { id: 1, name: 'Laptop' },
      { id: 2, name: 'Phone' },
    ],
  })),
  on(ProductActions.loadProductsSuccess, (state, { products }) => ({
    ...state,
    products,
  })),
  on(ProductActions.loadProductsFailure, (state, { error }) => ({
    ...state,
    products: [],
  })),
);
