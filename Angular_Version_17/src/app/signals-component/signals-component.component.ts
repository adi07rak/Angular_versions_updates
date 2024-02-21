import { NgFor } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signals-component',
  standalone: true,
  imports: [NgFor], //Need to put NgFor as import 
  templateUrl: './signals-component.component.html',
  styleUrl: './signals-component.component.css'
})
export class SignalsComponentComponent {
  actions = signal<string[]>([]);
  counter = signal(0); // signal initiation
  
  increment() {
    this.counter.set(this.counter()+ 1);
    this.actions.update((oldActions: string[]) => [...oldActions,'INCREMENT']);
  }
  decrement() {
    this.counter.update((oldCounter) => oldCounter - 1);
    this.actions.update((oldActions: string[]) => [...oldActions,'DECREMENT']);
  }
}
