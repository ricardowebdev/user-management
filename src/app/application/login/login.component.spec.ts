import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { UserService    } from '../user/user.service';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let service: UserService;

  beforeEach(() => {
    service   = new UserService(null);
    component = new LoginComponent(service);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  }); 
});
