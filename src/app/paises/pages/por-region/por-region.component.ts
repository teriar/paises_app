import { Component,  } from '@angular/core';
import { Country } from '../../interfaces/Paises.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
     button{
      margin-left: 5px;
     }
  `]
})
export class PorRegionComponent  {

  regiones :string[] =[  'Africa', 'Americas', 'Asia', 'Europe', 'Oceania' ];
  regionActiva : string = ''
  arrPaises:Country[]=[];
 
  getClassCss(region:string){
    return (region === this.regionActiva) ? 'btn btn-success':'btn btn-outline-primary'
  }
  
  
  activarRegion(region: string){
    this.regionActiva = region;
    this.paisService.buscarApi(region,'region').subscribe((data:Country[])=>{
     this.arrPaises = data;
     });

  }
  
  
  constructor(private paisService:PaisService) { }
  
}
