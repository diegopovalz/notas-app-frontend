import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Nota } from './nota.model';
import { Observable } from 'rxjs';
import { environment as env } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NotaService {

  constructor(private http: HttpClient) { }

  darNotas(): Observable<Nota[]> {
    return this.http.get<Nota[]>(`${env.apiUrl}/`)
  }

  darNota(id: number): Observable<Nota> {
    return this.http.get<Nota>(`${env.apiUrl}/${id}`)
  }

  nuevaNota(nota: Nota): Observable<Nota> {
    return this.http.post<Nota>(`${env.apiUrl}/nota`, nota)
  }


}
