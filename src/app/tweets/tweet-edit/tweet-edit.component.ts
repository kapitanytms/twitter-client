import { Component, OnInit } from '@angular/core';
import { TweetService } from '../tweet.service';

@Component({
  selector: 'app-tweet-edit',
  templateUrl: './tweet-edit.component.html',
  styleUrls: ['./tweet-edit.component.scss']
})
export class TweetEditComponent implements OnInit {
  tweetMessage = '';
  constructor(private tweetService: TweetService) { }

  ngOnInit() {
  }

  public sendTweet() {
    if (this.tweetMessage !== '') {
      this.tweetService.addTweet(this.tweetMessage);
      this.tweetMessage = '';
    }
  }

}
