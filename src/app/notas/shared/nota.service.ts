import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Nota } from './nota.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotaService {

  private baseUrl: string = 'http://localhost:8080/notas'

  constructor(private http: HttpClient) { }

  darNotas(): Observable<Nota[]> {
    return this.http.get<Nota[]>(`${this.baseUrl}/nota/`)
  }

  nuevaNota(nota: Nota): Observable<Nota> {
    return this.http.post<Nota>(`${this.baseUrl}`, nota)
  }
}
