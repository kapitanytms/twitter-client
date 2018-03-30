import { Component, OnInit } from '@angular/core';
import {Tweet} from '../tweet';
import {TweetService} from '../tweet.service';

@Component({
  selector: 'app-tweet-list',
  templateUrl: './tweet-list.component.html',
  styleUrls: ['./tweet-list.component.scss']
})
export class TweetListComponent implements OnInit {

    tweets: Tweet[];
    constructor(private tweetService: TweetService) { }

    ngOnInit() {
        this.tweets = this.tweetService.getTweets();
    }

}
