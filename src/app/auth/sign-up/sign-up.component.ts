import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {passwordValidation} from '../password-validation';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  registrationForm: FormGroup;
  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
      this.registrationForm = this.fb.group({
          name: this.fb.group({
              firstname: new FormControl('', Validators.required),
              lastname: new FormControl('', Validators.required)
          }),
          username: new FormControl('', Validators.required),
          email: new FormControl('', [Validators.required, Validators.email]),
          passwords: this.fb.group({
              password: new FormControl('', Validators.required),
              retypedPassword: new FormControl('', [Validators.required, passwordValidation])
          })
      });
  }

  get firstname() { return this.registrationForm.get('name').get('firstname'); }
  get lastname() { return this.registrationForm.get('name').get('lastname'); }
  get username() { return this.registrationForm.get('username'); }
  get email() { return this.registrationForm.get('email'); }
  get password() { return this.registrationForm.get('passwords').get('password'); }
  get retypedPassword() { return this.registrationForm.get('passwords').get('retypedPassword'); }



  onSubmit() {
      const email = this.registrationForm.get('email').value;
      const password = this.registrationForm.get('passwords').get('password').value;
      this.authService.signUpUser(email, password);
  }
}
