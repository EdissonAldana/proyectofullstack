import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroLoginComponent } from './registro-login.component';

describe('RegistroLoginComponent', () => {
  let component: RegistroLoginComponent;
  let fixture: ComponentFixture<RegistroLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistroLoginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
