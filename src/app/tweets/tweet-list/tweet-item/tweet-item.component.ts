import {Component, Input, OnInit} from '@angular/core';
import {Tweet} from '../../tweet';
import { TweetService } from '../../tweet.service';

@Component({
  selector: 'app-tweet-item',
  templateUrl: './tweet-item.component.html',
  styleUrls: ['./tweet-item.component.scss']
})
export class TweetItemComponent implements OnInit {

    @Input() tweet: Tweet;
    liked: boolean;
    constructor(private tweetService: TweetService) { }

    ngOnInit() {
      this.liked = this.tweet.likes.includes(this.tweetService.currentUser.uid);
    }

    onLike() {
      if (!this.liked) {
        this.liked = true;
        this.tweet.likes.push(this.tweetService.currentUser.uid);
      } else {
        this.liked = false;
        const index = this.tweet.likes.indexOf(this.tweetService.currentUser.uid);
        this.tweet.likes.splice(index, 1);
      }
      this.tweetService.updateTweet(this.tweet);
    }

    onDelete() {
      this.tweetService.deleteTweet(this.tweet.id);
    }
}
