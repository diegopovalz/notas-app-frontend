import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotasComponent } from './feature/notas/notas.component';
import { SharedModule } from './shared/shared.module';
import { NotaComponent } from './feature/notas/nota/nota.component';
import { ListaNotasComponent } from './feature/notas/lista-notas/lista-notas.component';
import { NotasModule } from './feature/notas/notas.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    NotasComponent,
    NotaComponent,
    ListaNotasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    NotasModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
