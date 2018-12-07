import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private service: AuthService,
                private router: Router) { }

    canActivate() {
        if (!this.service.isLogged()) {
            this.router.navigate(['/login']);
            return false;
        }

        return true;
    }

}
