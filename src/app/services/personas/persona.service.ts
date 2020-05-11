import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Persona } from './persona';
import { MessageService } from './../../message.service'

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  private personasUrl = environment.PROCEDIMIENTOS_API_URL  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient,
    private messageService: MessageService) { }

  /** GET proyectos from the server */
  getPersonas(): Observable<Persona[]> {
    return this.http.get<Persona[]>(this.personasUrl + '/personas')
      .pipe(
        tap(e => console.log(e[0])),
        catchError(this.handleError<Persona[]>('getPersonas', []))
      );
  }

  /** POST: add a new proyecto to the server */
  addPersona(persona: Persona): Observable<Persona> {
    return this.http.post<Persona>(this.personasUrl + '/personas/crear', persona, this.httpOptions)
      .pipe(
        tap((newPersona: Persona) => {
           this.log(`added proyecto w/ id=${newPersona.rowId}`) 
          }));
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
  * @param operation - name of the operation that failed
  * @param result - optional value to return as the observable result
  */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
  }

  /** Log a ProyectoService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`ProyectoService: ${message}`);
  }
}
