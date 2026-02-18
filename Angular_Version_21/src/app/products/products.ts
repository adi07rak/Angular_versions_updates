import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadProducts } from '../store/products/products.action';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.scss',
})
export class Products {
  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(loadProducts());
  }
}
