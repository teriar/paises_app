import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/Paises.interface';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',

})
export class PaisTablaComponent  {

  constructor() { }

  @Input() arrPaises:Country[] = [];


}
