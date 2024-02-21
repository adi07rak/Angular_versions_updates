import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SignalsComponentComponent } from "./signals-component/signals-component.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, SignalsComponentComponent]
})
export class AppComponent {
  title = 'Angular_Version_17';
}
