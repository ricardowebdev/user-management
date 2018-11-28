import { Component } from '@angular/core';
import { Router    } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    logged:   boolean;

    constructor(private router: Router){}

    listenToLogged(user) {
        this.logged = true;
        window.localStorage.setItem('username', user.name);
        window.localStorage.setItem('profile',  user.profile);
        this.router.navigate(['dashboard']);
    }

    logout() {
        this.logged = false;
        window.localStorage.clear();
    }
}
