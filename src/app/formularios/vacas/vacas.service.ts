import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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

 getVaca():Observable<[]>{
  return this.httpClient.get<[]>('http://localhost:3000/vacas/');
 }
  
}
