import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZonaprivadaComponent } from './zonaprivada.component';

describe('ZonaprivadaComponent', () => {
  let component: ZonaprivadaComponent;
  let fixture: ComponentFixture<ZonaprivadaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ZonaprivadaComponent]
    });
    fixture = TestBed.createComponent(ZonaprivadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
