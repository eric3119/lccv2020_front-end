import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Pessoa } from 'src/model/pessoa';
import { TpVinculo } from 'src/model/tpvinculo';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiPessoas = 'http://localhost:3000/pessoas';
const apiTpVinculos = 'http://localhost:3000/tp_vinculo';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getPessoas(): Observable<Pessoa[]> {
    const url = `${apiPessoas}`;
    return this.http.get<Pessoa[]>(url)
      .pipe(
        tap(pessoas => console.log('leu as pessoas')),
        catchError(this.handleError('getPessoas', []))
      );
  }

  getPessoa(id: number): Observable<Pessoa> {
    const url = `${apiPessoas}/${id}`;
    return this.http.get<Pessoa>(url).pipe(
      tap(_ => console.log(`leu a pessoa id=${id}`)),
      catchError(this.handleError<Pessoa>(`getPessoa id=${id}`))
    );
  }

  addPessoa (pessoa): Observable<Pessoa> {
    return this.http.post<Pessoa>(apiPessoas, pessoa, httpOptions).pipe(
      // tslint:disable-next-line:no-shadowed-variable
      tap((pessoa) => console.log(`adicionou a pessoa com w/ id=${pessoa.id}`)),
      catchError(this.handleError<Pessoa>('addPessoa'))
    );
  }

  updatePessoa(id, pessoa): Observable<any> {
    const url = `${apiPessoas}/${id}`;
    return this.http.put(url, pessoa, httpOptions).pipe(
      tap(_ => console.log(`atualiza a pessoa com id=${id}`)),
      catchError(this.handleError<any>('updatePessoa'))
    );
  }

  deletePessoa (id): Observable<Pessoa> {
    const url = `${apiPessoas}/${id}`;

    return this.http.delete<Pessoa>(url, httpOptions).pipe(
      tap(_ => console.log(`remove a pessoa com id=${id}`)),
      catchError(this.handleError<Pessoa>('deletePessoa'))
    );
  }

  getTpVinculos(): Observable<TpVinculo[]> {
    const url = `${apiTpVinculos}`;
    return this.http.get<TpVinculo[]>(url)
      .pipe(
        tap(vinculos => console.log('leu os vinculos')),
        catchError(this.handleError('getTpVinculos', []))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      return of(result as T);
    };
  }
}
