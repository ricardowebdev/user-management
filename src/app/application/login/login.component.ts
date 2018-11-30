import { Component,
         OnInit,
         Input,
         Output,
         EventEmitter } from '@angular/core';
import { FormControl,
         FormGroup,
         Validators   } from '@angular/forms';

import { UserService  } from '../user/user.service';
import { Base         } from '../../common/base.class';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    base = new Base();
    @Output() logged = new EventEmitter();

    form = new FormGroup({
        password: new FormControl('', [
            Validators.required,
            Validators.minLength(5),
            Validators.maxLength(50),
        ]),

        email: new FormControl('', [
            Validators.required,
            Validators.minLength(5),
            Validators.maxLength(100),
            Validators.email
        ]),
    });

    get password() {
        return this.form.get('password');
    }

    get email() {
        return this.form.get('email');
    }

    constructor(private service: UserService) { }

    login() {
        const users = this.service.listUsers();
        const user  = users.find((instance) => instance.email === this.email.value);

        if (!user) {
            this.base.setAlert('Usuario não encontrado', 'danger');
            return false;
        }

        if (this.password.value !== user.password) {
            this.base.setAlert('Usuario ou senha inválido', 'danger');
            return false;
        }

        this.logged.emit(user);
        return true;
    }

    clearAlert() {
        if (this.base.alertMsg !== '') {
            this.base.closeAlert();
        }
    }
}
