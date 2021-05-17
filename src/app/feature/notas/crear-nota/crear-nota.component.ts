import { Component, Input, OnInit } from '@angular/core';
import { Nota } from '../shared/nota.model';
import { NotaService } from '../shared/nota.service';

@Component({
  selector: 'app-crear-nota',
  templateUrl: './crear-nota.component.html',
  styleUrls: ['./crear-nota.component.css']
})
export class CrearNotaComponent implements OnInit {

  @Input('value') currentDateValue: string
  nota: Nota = {}

  constructor(private service: NotaService) { }

  ngOnInit(): void { }

  saveNote(): void {
    this.service.nuevaNota(this.nota)
  }

  setDescripcion(event: any): void {
    this.nota.descripcion = event.target.value
  }

  setFecha(event: any): void {
    this.nota.fecha = event.target.value
  }

}
