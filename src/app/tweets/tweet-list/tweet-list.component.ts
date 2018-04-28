import { Component, OnInit, OnDestroy } from '@angular/core';
import {Tweet} from '../tweet';
import {TweetService} from '../tweet.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-tweet-list',
  templateUrl: './tweet-list.component.html',
  styleUrls: ['./tweet-list.component.scss']
})
export class TweetListComponent implements OnInit, OnDestroy {

    tweets: Tweet[];
    tweetsSubscription: Subscription;
    constructor(private tweetService: TweetService) { }

    ngOnInit() {
        this.tweetsSubscription = this.tweetService.tweets.subscribe(
            data => this.tweets = data
        );
    }

    ngOnDestroy() {
        this.tweetsSubscription.unsubscribe();
    }

}
