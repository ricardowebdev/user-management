import { Injectable } from '@angular/core';

import { UserService } from '../application/user/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    constructor(private users: UserService) { }

    login(login) {
        const auth = {
            logged: false,
            message: ''
        };

        const users = this.users.listUsers();
        const user  = users.find((instance) => instance.email === login.email);

        if (!user) {
            auth.message = 'Usuario não encontrado';
            return auth;
        }

        if (login.password !== user.password) {
            auth.message = 'Usuario ou senha inválido';
            return auth;
        }

        const logged   = window.btoa('true');
        const profile  = window.btoa(JSON.stringify(user.profile));
        const username = window.btoa(JSON.stringify(user.name));

        localStorage.setItem('logged',   logged);
        localStorage.setItem('profile',  profile);
        localStorage.setItem('username', username);

        auth.logged = true;
        return auth;
    }

    logout() {
        localStorage.clear();
    }

    isLogged() {
        let decodedData = localStorage.getItem('logged');

        if (decodedData === null || decodedData === 'null') { return false; }

        decodedData = window.atob(decodedData);

        if (decodedData === 'true') { return true; }
    }
}
