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

    myStyle = {};
    myParams = {};
    width = 100;
    height = 100;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.userChanged.subscribe((user) => this.user = user);
    this.myStyle = {
        'position': 'absolute',
        'width': '100%',
        'height': '100%',
        'z-index': -1,
        'top': 0,
        'left': 0,
        'right': 0,
        'bottom': 0,
    };
    this.myParams = {
        particles: {
            number: {
                value: 200,
            },
            color: {
                value: '#ffffff'
            },
            shape: {
                type: 'triangle',
            },
        },
        interactivity: {
          events: {
              onhover: {
                  enable: true,
                  mode: 'repulse'
              }
          }
        }
    };
  }
}
