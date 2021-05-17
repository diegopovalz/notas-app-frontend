import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})
export class NotasComponent implements OnInit {

  titulo: string
  mensaje: string
  exito: boolean = false;

  constructor() { }

  ngOnInit() { }

  setTitulo(event: string) {
    this.titulo = event
  }

  setMensaje(event: string) {
    this.mensaje = event
  }

  setExito(event: boolean) {
    this.exito = event
  }

}
