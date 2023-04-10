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
    nombre: new FormControl("", Validators.required),
    correo: new FormControl("", Validators.required),
    pass: new FormControl("", Validators.required),
    rol: new FormControl("", Validators.required),
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
    return this.formularioUsuario.get('nombre')
  }
  getCorreo(){
    return this.formularioUsuario.get('correo')
  }
  getContrasena(){
    return this.formularioUsuario.get('pass')
  }
  getRol(){
    return this.formularioUsuario.get('rol')
  }

  async registroU(){
    
    const regUusuario = {
      nombre: this.getUsuario()?.value,
      correo: this.getCorreo()?.value,
      pass: this.getContrasena()?.value,
      rol: this.getRol()?.value
    }
    if(this.formularioUsuario.valid){
      this.usuariosService.postUsuario(regUusuario).subscribe(usu =>{
        
      });
    }
  }

  

}
