// import { OnInit } from '@angular/core';
import { Component, OnInit, OnChanges, DoCheck, AfterContentInit,
          AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `

    <app-ng-style></app-ng-style>
    <br>

    <app-css></app-css>
    <br>

    <app-clases></app-clases>
    <br><br/>

    <!-- Directivas personalisadas -->
    <p class="m-3" [appResaltado]="'red'">
        Hola Mundo
    </p>

    <br>
    <!-- ngSwitch - Multiples decisiones con una sola decisión -->
    <app-ng-switch></app-ng-switch>


  `,
  styles: []
})
export class HomeComponent implements OnInit, OnChanges, DoCheck, AfterContentInit,
          AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  constructor() { 
    console.log("constructor");
  }

  ngOnInit() {
    console.log("ngOnInit");
  }

  ngOnChanges() {
    console.log("ngOnChanges");
  } 
  
  ngDoCheck () {
    console.log("ngDoCheck");
  }

  ngAfterContentInit () {
    console.log("ngAfterContentInit");
  }

  ngAfterContentChecked () {
    console.log("ngAfterContentChecked");
  }

  ngAfterViewInit () {
    console.log("ngAfterViewInit");
  }

  ngAfterViewChecked () {
    console.log("ngAfterViewChecked");
  }

  ngOnDestroy () {
    console.log("ngOnDestroy");
  }
}
