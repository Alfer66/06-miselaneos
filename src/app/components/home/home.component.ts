import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <app-ng-style></app-ng-style> -->
    <app-css></app-css>
    <app-clases></app-clases>

    <!-- Directivas personalisadas -->
    <p class="m-3" [appResaltado]="'red'">
        Hola Mundo
    </p>

    <!-- ngSwitch - Multiples decisiones con una sola decisión -->
    <app-ng-switch></app-ng-switch>
  `,
  styles: []
})
export class HomeComponent {

}
