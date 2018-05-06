import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { TabMenuModule } from 'primeng/tabmenu';
import { MenuItem } from 'primeng/api';
import { Tweet } from '../tweets/tweet';
import { TweetService } from '../tweets/tweet.service';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { combineLatest } from 'rxjs/observable/combineLatest';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {
  queryParam = '';
  subscription: Subscription;
  tweets: Tweet[];
  // todo: users
  activeItem: MenuItem;
  menuItems: MenuItem[] = [
    {label: 'Tweets', icon: 'fa-twitter-square', command: (event) => { this.activeItem = event.item; } },
    {label: 'People', icon: 'fa-user-circle', command: (event) => { this.activeItem = event.item; } }
  ];

  constructor(private route: ActivatedRoute,
              private tweetService: TweetService) { }

  ngOnInit() {
    this.activeItem = this.menuItems[0];
    const queryParam$ = this.route.params.map(
      (params: Params) => <string>(params['queryParam'])
    );
    this.subscription = combineLatest(queryParam$, this.tweetService.tweets$)
    .subscribe(([param, tweets]) => {
        this.queryParam = param;
        this.tweets = tweets.filter((a) => a.text.includes(param));
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
