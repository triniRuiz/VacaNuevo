import { Component } from '@angular/core';
import { usuario } from 'src/app/interfaces/usuario.interface';
import { UsuariosService } from '../../formularios/usuarios/usuarios.service';

@Component({
  selector: 'app-listado-usuarios',
  templateUrl: './listado-usuarios.component.html',
  styleUrls: ['./listado-usuarios.component.css']
})
export class ListadoUsuariosComponent {

  usuarios: usuario[] = [];

  constructor(
    private usuariosService: UsuariosService,
  ) {}

  ngOnInit(){
    this.getUsuarios();
  }

  getUsuarios() {
    this.usuariosService.getUsuarios().subscribe(usuarios => {
      this.usuarios = usuarios;
    });
  }

}
