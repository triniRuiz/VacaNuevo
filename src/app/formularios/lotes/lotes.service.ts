import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LotesService {

  constructor(
    private httoClient: HttpClient
  ) { }

  getLotes():Observable<[]>{
    return this.httoClient.get<[]>('http://localhost:3000/lotes/obtener');
  }

  postLote(lote:{} ){
    return this.httoClient.post('http://localhost:3000/lotes/crear', lote);
  }
  

}
