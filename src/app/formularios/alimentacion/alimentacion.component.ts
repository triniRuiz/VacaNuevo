import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AlimentacionService } from './alimentacion.service';
import { forma } from 'src/app/interfaces/forma.interface';

@Component({
  selector: 'app-alimentacion',
  templateUrl: './alimentacion.component.html',
  styleUrls: ['./alimentacion.component.css']
})
export class AlimentacionComponent {

  formularioAlimentacion = new FormGroup({
    nombre: new FormControl('', Validators.required),
    descripcion: new FormControl('', Validators.required),
    forma: new FormControl('', Validators.required),
  });

  formas: forma[] = [{
    id:1,
    forma: 'Bajar'
  },{
    id:1,
    forma: 'Mantener'
  },{
    id:1,
    forma: 'Subir'
  }];
  constructor(
    public formnombre: FormBuilder,
    private AlimentacionService: AlimentacionService,
  ) {}
  getNombre(){
    return this.formularioAlimentacion.get('nombre');
  }
  getDescripcion(){
    return this.formularioAlimentacion.get('descripcion');
  }
  getForma(){
    return this.formularioAlimentacion.get('forma');
  }

  async nuevaFormula(){

    const formula = {
      formula: this.getNombre()?.value,
      descripcion: this.getDescripcion()?.value,
      forma: this.getForma()?.value,
    }

    if(this.formularioAlimentacion.valid){
      this.AlimentacionService.postFormula(formula).subscribe(formula =>{
        console.log(formula);
        
      });
    }
  }
}
