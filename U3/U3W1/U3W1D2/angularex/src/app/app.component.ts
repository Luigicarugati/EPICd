import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Component1Component } from "./components/component1/component1.component";
import { Component3Component } from "./components/component3/component3.component";
import { Component2Component } from "./components/component2/component2.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, Component1Component, Component3Component, Component2Component]
})
export class AppComponent {
  title = 'angularex';
}
