import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';
import { UserService   } from './user.service';

describe('UserComponent', () => {
  let component: UserComponent;
  let service:   UserService;

  beforeEach(() => {
  	service   = new UserService(null);
    component = new UserComponent(service);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });  
});
