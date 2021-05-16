import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearNotaComponent } from './crear-nota/crear-nota.component';
import { ListaNotasComponent } from './lista-notas/lista-notas.component';

const routes: Routes = [
  { path: "listar", component: ListaNotasComponent },
  { path: "nueva", component: CrearNotaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotasRoutingModule { }
