import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor( 
    private httpClient: HttpClient
  ) { }

  getUsuarios():Observable<[]>{
    return this.httpClient.get<[]>('http://localhost:3000/obtener');
  }

  getRoles():Observable<[]>{
    return this.httpClient.get<[]>('http://localhost:3000/roles');
  }

  postUsuario(usuario:{}){
    return this.httpClient.post('http://localhost:3000/usuarios/crear', usuario);
  }
}
