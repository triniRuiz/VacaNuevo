import { Component } from '@angular/core';
import { LotesService } from 'src/app/formularios/lotes/lotes.service';
import { lote } from 'src/app/interfaces/lote.interface';

@Component({
  selector: 'app-listado-lotes',
  templateUrl: './listado-lotes.component.html',
  styleUrls: ['./listado-lotes.component.css']
})
export class ListadoLotesComponent {

  lotes: lote[] = [];

  constructor(
    private lotesService: LotesService,
  ) {}

  ngOnInit() {
    this.getLotes();
  }

  getLotes() {
    this.lotesService.getLotes().subscribe(lotes =>{
      this.lotes = lotes;
    });
  }

}
