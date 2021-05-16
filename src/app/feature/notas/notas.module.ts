import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotasRoutingModule } from './notas-routing.module';
import { NotasComponent } from './notas.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CrearNotaComponent } from './crear-nota/crear-nota.component';

@NgModule({
  declarations: [
    NotasComponent,
    CrearNotaComponent
  ],
  imports: [
    CommonModule,
    NotasRoutingModule,
    SharedModule
  ],
  exports: [
    NotasComponent
  ]
})
export class NotasModule { }
