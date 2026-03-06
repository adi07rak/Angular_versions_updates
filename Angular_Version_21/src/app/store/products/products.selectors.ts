import { createFeatureSelector, createSelector, select } from '@ngrx/store';
import { adapter, ProductState } from './products.reducer';

export const selectProductsState = createFeatureSelector<ProductState>('products');

export const { selectAll: selectAllProducts } = adapter.getSelectors(selectProductsState);

export const selectProducts = createSelector(selectProductsState, selectAllProducts);

export const selectLoading = createSelector(selectProductsState, (state) => state.loading);

export const selectError = createSelector(selectProductsState, (state) => state.error);
