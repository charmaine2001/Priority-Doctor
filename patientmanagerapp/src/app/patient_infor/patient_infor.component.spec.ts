import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientInforComponent } from './patient_infor.component';

describe('PatientInforComponent', () => {
  let component: PatientInforComponent;
  let fixture: ComponentFixture<PatientInforComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PatientInforComponent]
    });
    fixture = TestBed.createComponent(PatientInforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
