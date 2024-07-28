import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FresasComponent } from './fresas.component';

describe('FresasComponent', () => {
  let component: FresasComponent;
  let fixture: ComponentFixture<FresasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FresasComponent]
    });
    fixture = TestBed.createComponent(FresasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
