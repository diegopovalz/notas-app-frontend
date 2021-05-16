import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotasRoutingModule } from './notas-routing.module';
import { NotasComponent } from './notas.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CrearNotaComponent } from './crear-nota/crear-nota.component';
import { ListaNotasComponent } from './lista-notas/lista-notas.component';

@NgModule({
  declarations: [
    NotasComponent,
    ListaNotasComponent,
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
