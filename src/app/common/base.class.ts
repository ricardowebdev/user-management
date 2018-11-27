// Classe utilizada para chamar funções genericas de componentes reutilizaveis
export class Base {
	alertMsg:  string;
	alertType: string;


	setAlert(msg, type) {
		this.alertMsg  = msg;
		this.alertType = type;
	}

	closeAlert() {
		this.alertMsg  = "";
		this.alertType = "";		
	}	
}