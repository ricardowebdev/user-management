import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
    let component: DashboardComponent;

    beforeEach(() => {
        component = new DashboardComponent();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should get the username in localstorage', () => {
        window.localStorage.setItem('username', 'test');

        component.ngOnInit();

        expect(component.username).toBe('test');
    });
});
