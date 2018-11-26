import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { FormControl, 
         FormGroup, 
         Validators        } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
    users:         any;
    selectedUser:  any;
    filteredUsers: any;
    page:          string;

    constructor(private service: UserService) { }

    ngOnInit() {
        this.page         = 'list';
        this.selectedUser = {};
        this.loadUsers();
    }

	form = new FormGroup({
		id: new FormControl('', []),

		name: new FormControl('', [
			Validators.required,
			Validators.minLength(3),
			Validators.maxLength(50)
		]),

		password: new FormControl('', [
			Validators.required,
            Validators.minLength(3),
            Validators.maxLength(50),
        ]),
        
        oldPassword: new FormControl('', [
            Validators.minLength(3),
            Validators.maxLength(50),
        ]),

		profile: new FormControl('', [
			Validators.required			
		]),

		email: new FormControl('', [
            Validators.required,
            Validators.minLength(5)
		]),		
    }); 
    
	get id() {
		return this.form.get('id');
	}

	get name() {
		return this.form.get('name');
	}

	get profile() {
		return this.form.get('profile');
	}

	get password() {
		return this.form.get('password');
    }
    
	get email() {
		return this.form.get('email');
    }
    
    get oldPassword() {
        return this.form.get('oldPassword');
    }

    loadUsers() {
        this.users = this.service.listUsers();
        this.filteredUsers = this.users;        
    }

    changePage(page) {
        this.page = page;
        this.filteredUsers = this.users;
		this.form.reset();
    }

    selectUser(user) {
        this.form.reset();
        this.id.setValue(user.id);
        this.name.setValue(user.name);
        this.email.setValue(user.email);
        this.profile.setValue(user.profile);]
        this.oldPassword.setValue(user.password);
    }

    callDelete(user) {
        this.selectUser = user;
    }

    confirmDelete() {
        try {
            const id = this.users.indexOf(user => user.id == this.selectUser.id);
            if(!id)
                throw new Error("Usuário selecionado não encontrado");

            this.users.splice(id, 1);
        } catch(err) {
            console.log(err.message);
        }    
    }

    confirmForm() {
        if(this.id.value !== null || this.id.value > 0) {
            const user = this.users.find(user => user.id === this.id.value);
            if(!user) {
                console.log("Usuário não encontrado");
                return;
            }

            let password = this.oldPassword.value;

            if (this.password.value != "")
                password = this.password.value;

            user.name     = this.name.value;
            user.email    = this.email.value;
            user.profile  = this.profile.value;
            user.password = password;
            console.log("Usuário Alterado com sucesso");
            this.changePage('list');
        } else {
            if (this.checkUnique(this.email.value)) {
                console.log('Usuário já existe no sistema');
                return false;
            }
            
            this.users.push(this.form.value);
            this.changePage('list');
            console.log('Usuário inserido com sucesso');
        }
    }

    checkUnique(email) {
        const user = this.users.find(user => user.email == email);
        
        if(user)
            return true;

        return false;
    }

    findUser(userName) {
        if(userName == "" || userName == null) {
            this.filteredUsers = this.users;
        } else {
            this.filteredUsers = [];
            let size = userName.length;
            userName = userName.toLowerCase();

            for(let i in this.users) {
                let parse = this.users[i].name.substr(0, size);
                    parse = parse.toLowerCase();

                if (parse == userName)
                    this.filteredUsers.push(this.users[i]);
            }
            
            if(!this.users.length)
                console.log('Nenhum usuário encontrado');
        }
    }
}
