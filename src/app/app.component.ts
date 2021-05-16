import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Nota } from './feature/notas/shared/nota.model';
import { NotaService } from './feature/notas/shared/nota.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'notas-app';

  public notas: Nota[]

  constructor(private servicioNota: NotaService) { }

  ngOnInit() {
    //this.conseguirNotas()
  }

  public conseguirNotas(): void {
    this.servicioNota.darNotas().subscribe((res: Nota[]) => {
      this.notas = res
    }), (error: HttpErrorResponse) => {
      alert(error)
    }
  }
}
