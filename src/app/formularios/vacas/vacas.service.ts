import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VacasService {

  constructor(
   private httpClient: HttpClient
  ) { }

  postVaca(vaca:{}){
    return this.httpClient.post('http://localhost:3000/vacas/crear', vaca)
  }
}
