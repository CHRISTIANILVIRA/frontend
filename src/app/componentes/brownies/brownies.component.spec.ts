import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowniesComponent } from './brownies.component';

describe('BrowniesComponent', () => {
  let component: BrowniesComponent;
  let fixture: ComponentFixture<BrowniesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BrowniesComponent]
    });
    fixture = TestBed.createComponent(BrowniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
