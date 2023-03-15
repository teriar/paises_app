import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap,tap } from 'rxjs';
import { Country } from '../../interfaces/Paises.interface';

import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!:Country 


  constructor( private actividedRoute:ActivatedRoute,
    private paisService:PaisService) { }

  ngOnInit(): void {

    this.actividedRoute.params
    .pipe(
      switchMap(({codigoPais}) => this.paisService.buscarPais(codigoPais))
          )
    .subscribe(pais=>
{ this.pais = pais[0]
  console.log(this.pais)
})
  }

}
