import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Nota } from '../shared/nota.model';
import { NotaService } from '../shared/nota.service';

@Component({
  selector: 'app-lista-notas',
  templateUrl: './lista-notas.component.html',
  styleUrls: ['./lista-notas.component.css']
})
export class ListaNotasComponent implements OnInit {

  notas: Nota[] = []

  @Output() titulo = new EventEmitter<string>()
  @Output() mensaje = new EventEmitter<string>()
  @Output() exito = new EventEmitter<boolean>()

  constructor(private service: NotaService) { }

  ngOnInit(): void {
    this.conseguirNotas()
  }

  private conseguirNotas(): void {
    this.service.darNotas().subscribe((res: Nota[]) => {
      this.notas = res
    }, (err: HttpErrorResponse) => {
      this.titulo.emit('Error')
      this.mensaje.emit(err.message)
      this.exito.emit(false)
    })
  }

}
