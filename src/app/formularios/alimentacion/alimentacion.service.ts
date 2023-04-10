import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class AlimentacionService {

  constructor(
    private httpClient: HttpClient
  ) { }

  postFormula(formula: {}) {
    console.log(formula);
    return this.httpClient.post('http://localhost:3000/formulas/crear', formula);
  }

  getFormulas():Observable<[]>{
    return this.httpClient.get<[]>('http://localhost:3000/razas/obtener');
  }
}
