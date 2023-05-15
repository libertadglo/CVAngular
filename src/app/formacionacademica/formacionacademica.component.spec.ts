import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormacionacademicaComponent } from './formacionacademica.component';

describe('FormacionacademicaComponent', () => {
  let component: FormacionacademicaComponent;
  let fixture: ComponentFixture<FormacionacademicaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormacionacademicaComponent]
    });
    fixture = TestBed.createComponent(FormacionacademicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
