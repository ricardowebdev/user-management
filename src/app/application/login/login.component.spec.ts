import { async,
         ComponentFixture,
         TestBed      } from '@angular/core/testing';
import { EventEmitter } from '@angular/core';
import { FormControl,
         FormGroup,
         Validators   } from '@angular/forms';

import { LoginComponent } from './login.component';
import { UserService    } from '../user/user.service';

describe('LoginComponent', () => {
    let component: LoginComponent;
    let service: UserService;

    beforeEach(() => {
        service   = new UserService();
        component = new LoginComponent(service);
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should empty base properties to blank', () => {
        component.base.setAlert('mensagem', 'success');

        component.clearAlert();

        expect(component.base.alertMsg).toBe('');
        expect(component.base.alertType).toBe('');
    });

    it('should create the form of this component', () => {
        expect(component.form.contains('password')).toBeTruthy();
        expect(component.form.contains('email')).toBeTruthy();
    });

    it('should validate the form inputs to be invalid', () => {
        component.email.setValue('teste');
        component.password.setValue('');

        expect(component.email.valid).toBeFalsy();
        expect(component.password.valid).toBeFalsy();
    });

    it('should validate the form inputs to be valid', () => {
        component.email.setValue('teste@teste.com');
        component.password.setValue('123456');

        expect(component.email.valid).toBeTruthy();
        expect(component.password.valid).toBeTruthy();
    });

    it('should login in the application', () => {
        component.email.setValue('ricardo.tecnology@gmail.com');
        component.password.setValue('123456');

        const result = component.login();

        expect(result).toBeTruthy();
    });

    it('should reject login in the application', () => {
        component.email.setValue('jose.arnaldo@gmail.com');
        component.password.setValue('112233');

        const result = component.login();

        expect(result).toBeFalsy();
    });
});
