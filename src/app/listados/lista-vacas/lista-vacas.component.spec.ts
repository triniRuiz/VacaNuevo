import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaVacasComponent } from './lista-vacas.component';

describe('ListaVacasComponent', () => {
  let component: ListaVacasComponent;
  let fixture: ComponentFixture<ListaVacasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaVacasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaVacasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
