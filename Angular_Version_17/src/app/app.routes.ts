import { Routes } from '@angular/router';
import { SignalsComponentComponent } from './signals-component/signals-component.component';
import { DifferenceComponent } from './difference/difference.component';

export const routes: Routes = [
  { path: '', component: SignalsComponentComponent },
  { path: 'diff', component: DifferenceComponent },
];
