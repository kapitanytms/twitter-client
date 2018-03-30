import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    userImg = `url(assets/images/test_user1.jpg)`;
    constructor(private authService: AuthService, private router: Router) { }

    ngOnInit() {}

    onSignOut() {
        this.authService.signOut();
    }

}
