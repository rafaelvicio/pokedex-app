import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InformationComponent } from './information/information.component';
import { ListComponent } from './list/list.component';

const POKEDEX_ROUTES: Routes = [
  {path: '', component: ListComponent},
  {path: ':number', component: InformationComponent},
]

@NgModule({
  imports: [RouterModule.forChild(POKEDEX_ROUTES)],
  exports: [RouterModule]
})
export class PokedexRoutingModule {}
