import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  registrationForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
      this.registrationForm = this.fb.group({
          name: this.fb.group({
              firstname: ['', Validators.required],
              lastname: ['', Validators.required]
          }),
          username: ['', Validators.required],
          email: ['', Validators.required],
          password: ['', Validators.required],
          retypedPassword: ['', Validators.required]
      });
  }
  get firstname() { return this.registrationForm.get('name').get('firstname'); }
  get lastname() { return this.registrationForm.get('name').get('lastname'); }
  get username() { return this.registrationForm.get('username'); }
  get email() { return this.registrationForm.get('email'); }
  get password() { return this.registrationForm.get('password'); }
  get retypedPassword() { return this.registrationForm.get('retypedPassword'); }



    onSubmit() {
    console.log(this.registrationForm.value);
  }
}
