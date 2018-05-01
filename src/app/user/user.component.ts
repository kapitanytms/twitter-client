import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {User} from '../auth/user';
import {UserService} from './user.service';
import 'rxjs/add/operator/switchMap';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user: User;
  constructor(private _router: Router,
              private _route: ActivatedRoute,
              private _userService: UserService) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
        this._userService.getUser(params['id']).subscribe(user => this.user = user);
    });
  }

}
