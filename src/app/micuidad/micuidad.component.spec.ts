import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicuidadComponent } from './micuidad.component';

describe('MicuidadComponent', () => {
  let component: MicuidadComponent;
  let fixture: ComponentFixture<MicuidadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MicuidadComponent]
    });
    fixture = TestBed.createComponent(MicuidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
