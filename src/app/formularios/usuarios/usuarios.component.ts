import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Rol } from 'src/app/interfaces/roles.interface';
import { UsuariosService } from './usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {

  formularioUsuario = new FormGroup({
    nombreU: new FormControl("", Validators.required),
    correo: new FormControl("", Validators.required),
    contrasena: new FormControl("", Validators.required),
    rolU: new FormControl("", Validators.required),
  })
  roles: Rol[] = [];

  private usuario: [] = [];
  constructor(
    public formularioUsuarios: FormBuilder,
    private usuariosService: UsuariosService,
  ) {}

  ngOnInit() {
    this.getRoles();
  }

  getRoles(){
    this.usuariosService.getRoles().subscribe(roles => {
      this.roles = roles;
    });
  }
  
  getUsuario(){
    return this.formularioUsuario.get('nombreU')
  }
  getCorreo(){
    return this.formularioUsuario.get('correo')
  }
  getContrasena(){
    return this.formularioUsuario.get('contrasena')
  }
  getRol(){
    return this.formularioUsuario.get('rolU')
  }

  async registroU(){
    
    const regUusuario = {
      nombre: this.getUsuario()?.value,
      correo: this.getCorreo()?.value,
      contrasena: this.getContrasena()?.value,
      rol: this.getRol()?.value
    }
    if(this.formularioUsuario.valid){
      this.usuariosService.postUsuario(regUusuario).subscribe(us =>{
      });
    }
  }

  

}
