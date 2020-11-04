import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getService(apiUrl: string): Observable<any> {
    return this.http.get(apiUrl).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(error);
      })
    );
  }

}
