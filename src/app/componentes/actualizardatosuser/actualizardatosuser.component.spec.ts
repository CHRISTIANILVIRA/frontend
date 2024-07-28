import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizardatosuserComponent } from './actualizardatosuser.component';

describe('ActualizardatosuserComponent', () => {
  let component: ActualizardatosuserComponent;
  let fixture: ComponentFixture<ActualizardatosuserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualizardatosuserComponent]
    });
    fixture = TestBed.createComponent(ActualizardatosuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
