import { Injectable } from '@angular/core';
import { Http       } from '@angular/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {
    constructor(private http: Http) { }

    listUsers() {
        let users = [
            { 
                id:       1, 
                name:     "Ricardo dos Santos Souza", 
                email:    "ricardo.tecnology@gmail.com",
                password: "123456",
                profile:  1
            },
            { 
                id:      2, 
                name:    "Fabio Xavier", 
                email:   "fabio.xavier@gmail.com",
                password: "123456",
                profile: 2
            },
            { 
                id:      3, 
                name:    "Thais Mizuno", 
                email:   "thais.mizuno@gmail.com",
                password: "123456",
                profile: 2
            },
        ];
        
        return users;
    }
}
