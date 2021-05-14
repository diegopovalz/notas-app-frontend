import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotaComponent } from './notas/nota/nota.component';
import { ListaNotasComponent } from './notas/lista-notas/lista-notas.component';
import { NotasComponent } from './notas/notas.component';

@NgModule({
  declarations: [
    AppComponent,
    NotaComponent,
    ListaNotasComponent,
    NotasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
