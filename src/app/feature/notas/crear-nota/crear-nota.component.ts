import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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

  titulo: string
  mensaje: string
  exito: boolean = false
  crearNotaForm: FormGroup

  constructor(private service: NotaService) { }

  ngOnInit(): void {
    this.construirForm()
  }

  construirForm() {
    this.crearNotaForm = new FormGroup({
      controlFecha: new FormControl('', [Validators.required]),
      controlDescripcion: new FormControl('', [Validators.required])
    })
  }

  saveNote(): void {
    this.service.nuevaNota(this.nota).subscribe((res: Nota) => {
      console.log(res)
      this.titulo = 'Nota creada'
      this.mensaje = `La nota '${res.descripcion}' ha sido creada con ID ${res.id}`
      this.exito = true
      this.crearNotaForm.reset()
    }, (err: HttpErrorResponse) => {
      this.titulo = 'Error'
      this.mensaje = `Se ha producido un error: ${err.message}`
      this.exito = false
    })
  }

  setDescripcion(event: any): void {
    this.nota.descripcion = event.target.value
  }

  setFecha(event: any): void {
    let values: any[] = event.target.value.split('-')
    let fecha = values.reverse().join('/')
    this.nota.fecha = fecha
  }

}
