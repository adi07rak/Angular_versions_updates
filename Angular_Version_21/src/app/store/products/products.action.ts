import { createAction } from '@ngrx/store';

export const loadProducts = createAction('[Products] Load Products');
export const loadProductsSuccess = createAction(
  '[Products] Load Products Success',
  (products: any[]) => ({ products }),
);
export const loadProductsFailure = createAction(
  '[Products] Load Products Failure',
  (error: any) => ({ error }),
);
