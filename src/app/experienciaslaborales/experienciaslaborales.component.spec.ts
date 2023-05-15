import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienciaslaboralesComponent } from './experienciaslaborales.component';

describe('ExperienciaslaboralesComponent', () => {
  let component: ExperienciaslaboralesComponent;
  let fixture: ComponentFixture<ExperienciaslaboralesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExperienciaslaboralesComponent]
    });
    fixture = TestBed.createComponent(ExperienciaslaboralesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
