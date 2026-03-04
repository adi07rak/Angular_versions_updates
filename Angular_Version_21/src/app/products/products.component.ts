import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { loadProducts } from '../store/products/products.actions';
import { AsyncPipe, CommonModule } from '@angular/common';
import {
  selectAllProducts,
  selectError,
  selectLoading,
} from '../store/products/products.selectors';
import { Product } from './models/product.model';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatCardModule,
    AsyncPipe,
    CommonModule,
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit {
  private store = inject(Store);

  ngOnInit() {
    this.store.dispatch(loadProducts());
  }

  products$ = this.store.select(selectAllProducts);
  loading$ = this.store.select(selectLoading);
  error$ = this.store.select(selectError);

  products = toSignal(this.products$, { initialValue: [] as Product[] });
  loading = toSignal(this.loading$, { initialValue: false });
  error = toSignal(this.error$, { initialValue: null });

  search = signal('');

  filteredProducts = computed(() =>
    this.products().filter((product: any) =>
      product.title.toLowerCase().includes(this.search().toLowerCase()),
    ),
  );
}
