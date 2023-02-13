import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usario-nuevo',
  template:  `
  <p>nuevo</p>
  `,
  styles: []
})
export class UsarioNuevoComponent {

  constructor ( private router: ActivatedRoute ){

    

    this.router.parent?.params.subscribe( parametros => {

      console.log("Ruta HIJA Usuario nuevo");
      console.log(parametros);
      
    })
  }
}
