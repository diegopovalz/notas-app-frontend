import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})
export class NotasComponent implements OnInit {

  public titulo: string = 'Prueba'
  public mensaje: string = 'Prueba de Alerta'

  constructor() { }

  ngOnInit(): void {
  }

}
