import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ListaNotasComponent } from './feature/notas/lista-notas/lista-notas.component';
import { NotasModule } from './feature/notas/notas.module';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { NotasRoutingModule } from './feature/notas/notas-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ListaNotasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    NotasModule,
    CoreModule,
    HttpClientModule,
    NotasRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
