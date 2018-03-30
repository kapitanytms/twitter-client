import {Component, OnInit} from '@angular/core';
import {AuthService} from './auth/auth.service';
import {User} from './shared/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  user: User;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.userChanged.subscribe((user) => this.user = user);
  }
}
