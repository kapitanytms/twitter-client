import { Component, OnInit, OnDestroy } from '@angular/core';
import { TweetService } from '../../tweets/tweet.service';
import { Tweet } from '../../tweets/tweet';
import { Subscription } from 'rxjs/Subscription';
import { SearchService } from '../search.service';
import { map } from 'rxjs/operators';
import { combineLatest } from 'rxjs/observable/combineLatest';
import { combineAll } from 'rxjs/operators';
import { zip } from 'rxjs/observable/zip';
import { Observable } from 'rxjs/Observable';
import { TweetFilterPipe } from './tweet-filter.pipe';

@Component({
  selector: 'app-search-tweet',
  templateUrl: './search-tweet.component.html',
  styleUrls: ['./search-tweet.component.scss']
})
export class SearchTweetComponent implements OnInit, OnDestroy {
  tweets: Tweet[];
  queryParam: string;
  private tweetsSubscription: Subscription;
  private paramsSubscription: Subscription;

  constructor(private tweetService: TweetService,
              private searchService: SearchService) {}

  ngOnInit() {
    this.paramsSubscription = this.searchService.queryParam$.subscribe(
      (param) => this.queryParam = param);
    this.tweetsSubscription = this.tweetService.tweets$.subscribe(
      (tweets) => this.tweets = tweets);
  }

  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
    this.tweetsSubscription.unsubscribe();
  }

}
