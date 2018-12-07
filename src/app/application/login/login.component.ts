import { Component    } from '@angular/core';
import { FormControl,
         FormGroup,
         Validators   } from '@angular/forms';
import { Router       } from '@angular/router';

import { AuthService  } from '../../common/auth.service';
import { Base         } from '../../common/base.class';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    base = new Base();

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

    constructor(
        private service: AuthService,
        private router: Router) { }

    login() {
        const login = this.service.login(this.form.value);

        if (!login.logged) {
            this.base.setAlert(login.message, 'danger');
            return false;
        }

        this.router.navigate(['/dashboard']);
        return true;
    }

    clearAlert() {
        if (this.base.alertMsg !== '') {
            this.base.closeAlert();
        }
    }
}
