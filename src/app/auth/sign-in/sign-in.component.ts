import { Component, OnInit, ViewChild } from '@angular/core';
import {AuthService} from '../auth.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  signInFailed = false;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSignin(form: NgForm) {
      const email = form.value.email;
      const password = form.value.password;
      this.authService.signInUser(email, password).catch((error) => {
        this.signInFailed = true;
      });
  }

}
