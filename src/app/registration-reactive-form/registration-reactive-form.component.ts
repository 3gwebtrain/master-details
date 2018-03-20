import {Component, OnInit} from "@angular/core";
import {FormGroup, FormControl, Validators} from "@angular/forms";

@Component({
	selector:"registration-reactive-form",
	templateUrl:"./registration-reactive-form.component.html"
})

export class RegistrationReactiveFormComponent implements OnInit {

	EMAIL_REGEX = "[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*";
	registrationForm:FormGroup;

	ngOnInit(){
		this.registrationForm = new FormGroup({
			reactiveFirstName: new FormControl('Shravan', Validators.required),
			reactivelastName: new FormControl(''),
			reactiveEmail: new FormControl('', [Validators.required,Validators.pattern(this.EMAIL_REGEX)]),
			address: new FormGroup({
				street: new FormControl(''),
				country: new FormControl('', Validators.required)
			})
		})
	}

	onSubmit(formValue) {
		console.log(formValue);
		console.log(this.registrationForm.value)
	}


}