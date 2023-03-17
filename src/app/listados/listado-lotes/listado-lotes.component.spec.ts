import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoLotesComponent } from './listado-lotes.component';

describe('ListadoLotesComponent', () => {
  let component: ListadoLotesComponent;
  let fixture: ComponentFixture<ListadoLotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoLotesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoLotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
