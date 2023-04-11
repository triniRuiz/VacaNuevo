import { Component } from '@angular/core';
import { VacasService } from '../../formularios/vacas/vacas.service';
import { vacaUsuario } from 'src/app/interfaces/vacaslote.interface';

@Component({
  selector: 'app-lista-vacas',
  templateUrl: './lista-vacas.component.html',
  styleUrls: ['./lista-vacas.component.css']
})
export class ListaVacasComponent {

  vacas: vacaUsuario[] = [];

  constructor(
    private vacasService: VacasService,
  ) {}

  ngOnInit() {
    this.getVacas();
  }

  getVacas() {
    this.vacasService.getVaca().subscribe(vacas =>{
      this.vacas = vacas;
    });
  }
}
