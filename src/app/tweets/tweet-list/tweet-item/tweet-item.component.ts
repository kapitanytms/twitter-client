import {Component, Input, OnInit, OnDestroy} from '@angular/core';
import {Tweet} from '../../tweet';
import { TweetService } from '../../tweet.service';
import { AuthService } from '../../../auth/auth.service';
import { Subscription } from 'rxjs/Subscription';
import { User } from '../../../auth/user';

@Component({
  selector: 'app-tweet-item',
  templateUrl: './tweet-item.component.html',
  styleUrls: ['./tweet-item.component.scss']
})
export class TweetItemComponent implements OnInit {

    @Input() tweet: Tweet;
    currentUser: User;
    liked = false;
    constructor(private tweetService: TweetService,
                private authService: AuthService) { }

    // Checking if the current user likes the tweet
    ngOnInit() {
      this.currentUser = this.authService.currentUser;
      this.liked = this.tweet.likes.includes(this.currentUser.uid);
    }

    // Like or unlike depending on the actual state
    // by adding or removing from the likes list.
    // Update the tweet.
    onLike() {
      if (!this.liked) {
        this.liked = true;
        this.tweet.likes.push(this.currentUser.uid);
      } else {
        this.liked = false;
        const index = this.tweet.likes.indexOf(this.currentUser.uid);
        this.tweet.likes.splice(index, 1);
      }
      this.tweetService.updateTweet(this.tweet);
    }

    // Check if it's the current user's tweet.
    // If yes, delete the tweet.
    onDelete() {
      if (this.tweet.user.uid === this.currentUser.uid) {
        this.tweetService.deleteTweet(this.tweet.id);
      }
    }
}
