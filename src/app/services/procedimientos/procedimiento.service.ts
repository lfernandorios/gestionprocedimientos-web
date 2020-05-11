import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {Procedimiento} from './procedimiento';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({providedIn: 'root'})

export class ProcedimientoService {

  constructor(private http: HttpClient) { }

  buscarTodos(pageIndex: number= 0, pageSize: number): Observable<Procedimiento[]> {
    return this.http.get<Procedimiento[]>('http://localhost:8080/gestion-procedimientos/api/v1/procedimientos', {
      params: new HttpParams()
        .set('pageIndex', pageIndex.toString())
        .set('pageSize', pageSize.toString())
    });
  }
}
