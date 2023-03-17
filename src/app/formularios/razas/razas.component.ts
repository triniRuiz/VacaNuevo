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
    nomRaza: new FormControl("", Validators.required)
  })

  private raza = [];
  constructor(
    public formularioRaza: FormBuilder,
    private razasService: RazasService,
  ) {}

  getRaza(){
    return this.formularioRazas.get('nomRaza');
  }

  async registroRaza() {
    const registroR = {
      nomRaza: this.getRaza()?.value
    }

    if(this.formularioRazas.valid){
      this.razasService.postRaza(registroR).subscribe(raza => {

      });
    }
  }
}
