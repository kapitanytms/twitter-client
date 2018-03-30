import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSignin(form: NgForm) {
      const email = form.value.email;
      const password = form.value.password;
      this.authService.signinUser(email, password);
  }

}
