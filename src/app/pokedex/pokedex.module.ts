import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ListComponent } from './list/list.component';
import { InformationComponent } from './information/information.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ListComponent,
    InformationComponent
  ],
  declarations: [
    ListComponent,
    InformationComponent
  ]
})
export class PokedexModule { }
