import { Injectable } from '@angular/core';
import { Http       } from '@angular/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {
    constructor(private http: Http) { }

    listUsers() {
        const users = [
            {
                id:       1,
                name:     'Ricardo dos Santos Souza',
                email:    'ricardo.tecnology@gmail.com',
                password: '123456',
                profile:  1
            },
            {
                id:       2,
                name:     'Fabio Xavier',
                email:    'fabio.xavier@gmail.com',
                password: '123456',
                profile:  2
            },
            {
                id:       3,
                name:     'Thais Mizuno',
                email:    'thais.mizuno@gmail.com',
                password: '123456',
                profile:  2
            },
        ];

        return users;
    }

    removeUser(users, selectedUser) {
        try {
            const id = users.indexOf(user => user.id === selectedUser.id);
            if (!id) {
                throw new Error('Usuário selecionado não encontrado');
            }

            users.splice(id, 1);
            return users;

        } catch (err) {
            return err.message;
        }
    }

    saveUser(users, user) {
        if (this.checkUnique(users, user.email)) {
            return 'Usuário já existe no sistema';
        }

        users.push(user);
        return users;
    }

    checkUnique(users, email) {
        const user = users.find((instance) => instance.email === email);

        if (user) {
            return true;
        }
        return false;
    }

    editUser(users, user) {
        let selectedUser;
        let password;

        try {
            selectedUser = users.find((instance) => instance.id === user.id);
            if (!selectedUser) {
                throw new Error('Usuário não encontrado');
            }


        } catch (err) {
            return err.message;
        }

        password = user.oldPassword;

        if (user.password !== '') {
            password = user.password;
        }

        selectedUser.name     = user.name;
        selectedUser.email    = user.email;
        selectedUser.profile  = user.profile;
        selectedUser.password = password;

        return users;
    }
}
