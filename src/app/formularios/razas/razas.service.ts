import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RazasService {

  constructor(
    private httpClient: HttpClient
  ) { }

  postRaza(raza:{}){
    return this.httpClient.post('http://localhost:3000/razas/crear',raza);
  }

  getRazas():Observable<[]>{
    return this.httpClient.get<[]>('http://localhost:3000/razas/obtener');
  }
}
