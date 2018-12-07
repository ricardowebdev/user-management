import { Component, OnInit } from '@angular/core';
import { trigger,
         style,
         animate,
         transition,       } from '@angular/animations';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [
        trigger('fade', [
            transition('void <=> *', [
                style({ opacity: 0 }),
                animate(500)
            ])
        ])
    ]
})
export class DashboardComponent implements OnInit {
    username: string;

    ngOnInit() {
        this.username = atob(window.localStorage.getItem('username'));
    }
}
