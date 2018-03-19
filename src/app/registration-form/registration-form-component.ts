import {Component} from "@angular/core";

interface User {
	firstName: string;
	lastName: string;
}

@Component({
	selector:"registration-form",
	templateUrl:"./registration-form-component.html",
	styles:['.register-form {padding:1rem}']
})

export class RegistrationFormComponent{
	user: User = {
		firstName: 'Shravan',
		lastName: 'Kasagoni'
	}

	onSubmit(formValue){
		console.log('testng', formValue);
	}
}