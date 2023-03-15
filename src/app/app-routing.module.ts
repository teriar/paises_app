import {Component, NgModule} from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { PorCapitalComponent } from './paises/pages/por-capital/por-capital.component';
import { PorPaisComponent } from './paises/pages/por-pais/por-pais.component';
import { PorRegionComponent } from './paises/pages/por-region/por-region.component';
import { VerPaisComponent } from './paises/pages/ver-pais/ver-pais.component';


const routes:Routes = [

{
    path: '',
    component: PorPaisComponent,
    pathMatch:'full'

},
{
    path:'Region',
    component: PorRegionComponent,

},
{
    path:'Capital',
    component:PorCapitalComponent
},
{
   path:'Pais/:codigoPais',
   component:VerPaisComponent
},
{
    path:'**',
    redirectTo:''
}


];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)

    ],
    exports:[

    ]
})

export class AppRoutingModule {}