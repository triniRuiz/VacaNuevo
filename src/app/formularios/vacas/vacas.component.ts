import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { LotesService } from '../lotes/lotes.service';
import { VacasService } from './vacas.service';
import { RazasService } from '../razas/razas.service';
import { raza } from 'src/app/interfaces/raza.interface';
import { lote } from 'src/app/interfaces/lote.interface';

@Component({
  selector: 'app-vacas',
  templateUrl: './vacas.component.html',
  styleUrls: ['./vacas.component.css']
})
export class VacasComponent {

  formularioVacas = new FormGroup({
    arete: new FormControl("", Validators.required),
    fechaIn: new FormControl("", Validators.required),
    fechaNac: new FormControl("", Validators.required),
    fechaReg: new FormControl("", Validators.required),
    raza: new FormControl("", Validators.required),
    lote: new FormControl("", Validators.required),
    peso: new FormControl("", Validators.required)
  })
  razas: raza[] = [];
  lotes: lote[] = [];

  private arete = [];
  constructor(
    public formularioVaca: FormBuilder,
    private VacasService: VacasService,
    private lotesService: LotesService,
    private razasService: RazasService,
  ) {}

  ngOnInit() {
    this.getRazas();
    this.getLotes();
  }

  getRazas(){
    this.razasService.getRazas().subscribe(razas =>{
      this.razas = razas;
    });
  }

  getLotes(){
    this.lotesService.getLotes().subscribe(lotes =>{
      this.lotes = lotes;
    });
  }
  getArete(){
    return this.formularioVacas.get('arete');
  }
  getRaza(){
    return this.formularioVacas.get('raza');
  }
  getFechaIn(){
    return this.formularioVacas.get('fechaIn');
  }
  getLote(){
    return this.formularioVacas.get('lote');
  }
  getFechaNac(){
    return this.formularioVacas.get('fechaNac');
  }
  getFechaReg(){
    return this.formularioVacas.get('fechaReg');
  }
  getPeso(){
    return this.formularioVacas.get('peso');
  }
  async registroVaca(){

    const regVaca = {
      arete: this.getArete()?.value,
      fecha_nac: this.getFechaNac()?.value,
      fecha_ing: this.getFechaIn()?.value,
      fecha_reg: this.getFechaReg()?.value,
      raza: this.getRaza()?.value,
      lote: this.getLote()?.value,
      peso: this.getPeso()?.value
    }
    if(this.formularioVacas.valid){
      this.VacasService.postVaca(regVaca).subscribe(res => {
      });
    }
  }
}
