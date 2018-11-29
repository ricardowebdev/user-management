import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';
import { UserService   } from './user.service';

describe('UserComponent', () => {
    let component: UserComponent;
    let service:   UserService;

    beforeEach(() => {
        service   = new UserService();
        component = new UserComponent(service);
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should create the form of this component', () => {
        expect(component.form.contains('id')).toBeTruthy();
        expect(component.form.contains('name')).toBeTruthy();
        expect(component.form.contains('password')).toBeTruthy();
        expect(component.form.contains('oldPassword')).toBeTruthy();
        expect(component.form.contains('profile')).toBeTruthy();
        expect(component.form.contains('email')).toBeTruthy();
    });

    it('should validate the form inputs to be invalid', () => {
        component.email.setValue('teste');
        component.password.setValue('1');
        component.oldPassword.setValue('1');
        component.name.setValue('aa');
        component.profile.setValue('');

        expect(component.email.valid).toBeFalsy();
        expect(component.password.valid).toBeFalsy();
        expect(component.oldPassword.valid).toBeFalsy();
        expect(component.name.valid).toBeFalsy();
        expect(component.profile.valid).toBeFalsy();
    });

    it('should validate the form inputs to be invalid', () => {
        component.email.setValue('teste@teste.com');
        component.password.setValue('123456');
        component.oldPassword.setValue('123456');
        component.name.setValue('Roberto');
        component.profile.setValue('1');

        expect(component.email.valid).toBeTruthy();
        expect(component.password.valid).toBeTruthy();
        expect(component.oldPassword.valid).toBeTruthy();
        expect(component.name.valid).toBeTruthy();
        expect(component.profile.valid).toBeTruthy();
    });

    it('should test onInit of component', () => {
        window.localStorage.setItem('profile', '1');
        component.ngOnInit();

        expect(component.page).toBe('list');
        expect(component.userProfile).toBe(1);
    });

    it('should test loadUsers of component', () => {
        window.localStorage.setItem('profile', '1');
        component.loadUsers();

        expect(component.users.length).toBeGreaterThan(0);
        expect(component.filteredUsers).toEqual(component.users);
    });

    it('should test changePage of component', () => {
        component.ngOnInit();
        component.changePage('single');

        expect(component.page).toBe('single');
        expect(component.filteredUsers).toEqual(component.users);
    });

    it('should test selectUser of component', () => {
        component.ngOnInit();
        component.selectUser(component.users[0]);

        expect(component.form.valid).toBeTruthy();
    });

    it('should test removing a user', () => {
        component.ngOnInit();
        const size = component.users.length;

        component.selectUser(component.users[1]);
        component.confirmDelete();

        expect(component.users.length).toBe(size - 1);
    });

    it('should test inserting a user', () => {
        component.ngOnInit();
        const size = component.users.length;
        component.id.setValue(0);
        component.name.setValue('Fernanda Alves');
        component.profile.setValue(1);
        component.password.setValue('123456');
        component.email.setValue('fernanda@alvez.com.br');

        component.confirmForm();

        expect(component.users.length).toBeGreaterThan(size);
        expect(component.base.alertMsg).not.toBe('');
    });

    it('should test editing a user', () => {
        component.ngOnInit();

        const name     = 'Fernanda Alves';
        const email    = 'fernanda@alvez.com.br';
        const password = '321654';
        const profile  = 2;

        component.selectUser(component.users[0]);
        component.name.setValue(name);
        component.email.setValue(email);
        component.oldPassword.setValue('123456');
        component.password.setValue(password);
        component.profile.setValue(profile);

        component.confirmForm();

        expect(component.users[0].name).toBe(name);
        expect(component.users[0].email).toBe(email);
        expect(component.users[0].password).toBe(password);
        expect(component.users[0].profile).toBe(profile);
    });

    it('should test filtering a user', () => {
        component.ngOnInit();

        component.findUser('ric');

        expect(component.filteredUsers.length).toBeGreaterThan(0);
        expect(component.base.alertMsg).toBe('');
    });

    it('should test not found a filtered user', () => {
        component.ngOnInit();

        component.findUser('irineu');

        expect(component.filteredUsers.length).toBeLessThan(1);
        expect(component.base.alertMsg).not.toBe('');
    });
});
