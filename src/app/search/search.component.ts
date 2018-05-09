import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { TabMenuModule } from 'primeng/tabmenu';
import { MenuItem } from 'primeng/api';
import { Tweet } from '../tweets/tweet';
import { TweetService } from '../tweets/tweet.service';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { User } from '../auth/user';
import { AuthService } from '../auth/auth.service';
import { SearchService } from './search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {
  queryParam: string;
  routeParamSubscription: Subscription;
  tweetResultsCountSubscription: Subscription;
  userResultsCountSubscription: Subscription;
  activeItem: MenuItem;
  menuItems: MenuItem[];

  constructor(private route: ActivatedRoute,
    private searchService: SearchService) {
    this.createTabs();
  }

  ngOnInit() {
    this.routeParamSubscription = this.route.params.subscribe(
      (params: Params) => {
        this.queryParam = params['q'];
        this.searchService.addQuery(params['q']);
        this.createTabs();
      }
    );
    this.tweetResultsCountSubscription = this.searchService.tweetResultsCount$.subscribe(
      (count) => {
        this.menuItems[0].label = 'Tweets' + ' (' + count + ')';
      }
    );
    this.userResultsCountSubscription = this.searchService.userResultsCount$.subscribe(
      (count) => {
        this.menuItems[1].label = 'People' + ' (' + count + ')';
      }
    );
  }

  ngOnDestroy() {
    this.routeParamSubscription.unsubscribe();
    this.tweetResultsCountSubscription.unsubscribe();
    this.userResultsCountSubscription.unsubscribe();
  }

  createTabs() {
    this.menuItems = [{
        label: 'Tweets',
        icon: 'fa-twitter-square',
        command: (event) => {
          this.activeItem = event.item;
        },
        routerLink: ['./tweets'],
        expanded: true
      },
      {
        label: 'People',
        icon: 'fa-user-circle',
        command: (event) => {
          this.activeItem = event.item;
        },
        routerLink: ['./users']
      }
    ];

    this.activeItem = this.menuItems[0];
  }
}

