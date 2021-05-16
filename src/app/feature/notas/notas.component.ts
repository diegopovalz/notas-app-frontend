import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Nota } from './shared/nota.model';
import { NotaService } from './shared/nota.service';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})
export class NotasComponent implements OnInit {

  public titulo: string
  public mensaje: string
  public exito: boolean = false;
  public notas: Nota[]

  constructor(private servicioNota: NotaService) { }

  ngOnInit() {
    //this.conseguirNotas()
    console.log('it works!')
    this.exito = true;
    this.titulo = 'Éxito'
    this.mensaje = 'Sí se pudieron conseguir las notas'
  }

  public conseguirNotas(): void {
    this.servicioNota.darNotas().subscribe((res: Nota[]) => {
      this.notas = res
      this.exito = true;
      this.titulo = 'Éxito'
      this.mensaje = 'Sí se pudieron conseguir las notas'
    }), (error: HttpErrorResponse) => {
      alert(error)
      this.titulo = 'Error'
      this.mensaje = 'No se pudieron conseguir las notas'
    }
  }

}
