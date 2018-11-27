import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
	logged:   boolean;

	listenToLogged(user) {
		this.logged   = true;
		window.localStorage.setItem("username", user.name);
		window.localStorage.setItem("profile",  user.profile);
	}

	logout() {
		this.logged = false;
		window.localStorage.clear();
	}
}
