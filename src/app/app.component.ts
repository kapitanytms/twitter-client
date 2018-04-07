import {Component, OnInit} from '@angular/core';
import {AuthService} from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    myStyle = {};
    myParams = {};
    width = 100;
    height = 100;

  constructor(private _authService: AuthService) {}
  get authService() { return this._authService; }
  ngOnInit() {
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
                value: '#4286f4'
            },
            shape: {
                type: 'circle',
            },
            size: {
                value: 4
            }
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
