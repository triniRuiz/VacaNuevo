import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { usuario } from 'src/app/interfaces/usuario.interface';
import { LotesService } from './lotes.service';
import { UsuariosService } from '../usuarios/usuarios.service';

@Component({
  selector: 'app-lotes',
  templateUrl: './lotes.component.html',
  styleUrls: ['./lotes.component.css']
})
export class LotesComponent {

  formularioLotes = new FormGroup({
    lote: new FormControl('', Validators.required),
    usuario: new FormControl('', Validators.required),
  })

  usuarios: usuario[] = [];

  constructor(
    public formularioLote: FormBuilder,
    private lotesService: LotesService,
    private usuariosService: UsuariosService,
  ) {}

  ngOnInit() {
    this.getUsuarios();
  }

  getUsuarios(){
    this.usuariosService.getUsuarios().subscribe(usuarios =>{
      this.usuarios = usuarios;
    });
  }

  getlote(){
    return this.formularioLotes.get('lote')
  }
  getUsuario(){
    return this.formularioLotes.get('usuario')
  }

  async registrarLote(){
    const registrarLote = {
      lote: this.getlote()?.value,
      usuario: this.getlote()?.value
    }

    if(this.formularioLotes.valid){
      this.lotesService.postLote(registrarLote).subscribe(lote => {
      });
    }
  }
}
