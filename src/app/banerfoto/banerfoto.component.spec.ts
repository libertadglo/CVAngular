import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BanerfotoComponent } from './banerfoto.component';

describe('BanerfotoComponent', () => {
  let component: BanerfotoComponent;
  let fixture: ComponentFixture<BanerfotoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BanerfotoComponent]
    });
    fixture = TestBed.createComponent(BanerfotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
