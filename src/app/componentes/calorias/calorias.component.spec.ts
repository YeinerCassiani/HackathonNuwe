import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaloriasComponent } from './calorias.component';

describe('CaloriasComponent', () => {
  let component: CaloriasComponent;
  let fixture: ComponentFixture<CaloriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaloriasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaloriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
