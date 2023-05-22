import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginHamburgariaComponent } from './login-hamburgaria.component';

describe('LoginHamburgariaComponent', () => {
  let component: LoginHamburgariaComponent;
  let fixture: ComponentFixture<LoginHamburgariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginHamburgariaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginHamburgariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
