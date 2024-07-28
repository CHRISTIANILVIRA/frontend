import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlfajoresComponent } from './alfajores.component';

describe('AlfajoresComponent', () => {
  let component: AlfajoresComponent;
  let fixture: ComponentFixture<AlfajoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlfajoresComponent]
    });
    fixture = TestBed.createComponent(AlfajoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
