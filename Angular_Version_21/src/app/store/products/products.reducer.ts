import { createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import * as ProductActions from './products.actions';
import { Product } from '../../products/models/product.model';

export interface ProductState extends EntityState<Product> {
  loading: boolean;
  error: string | null;
}

export const adapter: EntityAdapter<Product> = createEntityAdapter<Product>();

export const initialState: ProductState = adapter.getInitialState({
  loading: false,
  error: null,
});

export const productsReducer = createReducer(
  initialState,

  on(ProductActions.loadProducts, (state) => ({
    ...state,
    loading: true,
  })),
  on(ProductActions.loadProductsSuccess, (state, { products }) => {
    console.log('Products loaded successfully:', products);
    return adapter.setAll(products, { ...state, loading: false });
  }),
  on(ProductActions.loadProductsFailure, (state, { error }) => {
    console.log('Failed to load products:', error);
    return {
      ...state,
      error,
      loading: false,
    };
  }),
);
