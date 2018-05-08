import { Component, OnInit, OnDestroy } from '@angular/core';
import { SearchService } from '../search.service';
import { AuthService } from '../../auth/auth.service';
import { Subscription } from 'rxjs/Subscription';
import { User } from '../../auth/user';
import { map } from 'rxjs/operators';
import { combineLatest } from 'rxjs/observable/combineLatest';
import { query } from '@angular/core/src/animation/dsl';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.scss']
})
export class SearchUserComponent implements OnInit, OnDestroy {
  users: User[];
  // queryParam: string;
  private paramsSubscription: Subscription;

  constructor(private searchService: SearchService,
              private authService: AuthService) { }

  ngOnInit() {
    this.paramsSubscription = this.searchService.queryParam$
    .subscribe((param) => {
      this.users = this.authService.getUsers().filter((user) =>
        user.username.includes(param) || user.firstname.includes(param) || user.lastname.includes(param)
      );
      this.searchService.reportUserResults(this.users.length);
    });
    // this.queryParam = param;
    // this.users = this.authService.getUsers();
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }

}
