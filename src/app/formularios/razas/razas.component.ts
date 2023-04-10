import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { RazasService } from './razas.service';

@Component({
  selector: 'app-razas',
  templateUrl: './razas.component.html',
  styleUrls: ['./razas.component.css']
})
export class RazasComponent {

  formularioRazas = new FormGroup({
    raza: new FormControl('', Validators.required),
    pesoPromedio: new FormControl('', Validators.required),
  });

  constructor(
    public formRaza: FormBuilder,
    private razasService: RazasService,
  ) {}


    

  getRaza(){
    return this.formularioRazas.get('raza');
  }
  getPesoPromedio(){
    return this.formularioRazas.get('pesoPromedio');
  }

  async nuevaRaza(){

    const razaN = {
      nombre: this.getRaza()?.value,
      pesoProm: this.getPesoPromedio()?.value
    }

    if(this.formularioRazas.valid){
      this.razasService.postRaza(razaN).subscribe(razaa =>{
        console.log(razaa);
        
      });
    }
  }
 
}
