import { Component } from '@angular/core';
import { AlimentacionService } from 'src/app/formularios/alimentacion.service';
import { formulas } from 'src/app/interfaces/formulas.inferface';

@Component({
  selector: 'app-lista-formulas',
  templateUrl: './lista-formulas.component.html',
  styleUrls: ['./lista-formulas.component.css']
})
export class ListaFormulasComponent {

  formulas: formulas[] = [];

  constructor(
    private formulasService: AlimentacionService,
  ) {}

  ngOnInit() {
    this.getFormulas();
  }

  getFormulas() {
    this.formulasService.getFormulas().subscribe(formulas =>{
      this.formulas = formulas;
    });
  }

}
