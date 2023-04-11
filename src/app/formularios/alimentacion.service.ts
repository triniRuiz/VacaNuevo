import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlimentacionService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getFormulas():Observable<[]>{
    return this.httpClient.get<[]>('http://localhost:3000/formulas/obtener');
  }
}
