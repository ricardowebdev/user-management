import { async, TestBed } from '@angular/core/testing';
import { Router         } from '@angular/router';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
    let component: AppComponent;

    beforeEach(() => {
        let router: Router;
        router    = router;
        component = new AppComponent(router);
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('it should test logged behavior', () => {
        const user = {
            name: 'ricardo',
            profile: 1
        };

        component.listenToLogged(user);

        const username = window.localStorage.getItem('username');
        const profile  = window.localStorage.getItem('profile');
        expect(component.logged).toBeTruthy();
        expect(username).toBe('ricardo');
        expect(profile).toBe('1');
    });

    it('it should test logout behavior', () => {
        component.logout();

        expect(component.logged).toBeFalsy();
        expect(window.localStorage.getItem('usename')).toBeFalsy();
        expect(window.localStorage.getItem('profile')).toBeFalsy();
    });
});
