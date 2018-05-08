import { Component, OnInit, OnDestroy } from '@angular/core';
import {TweetService} from '../tweet.service';
import { User } from '../../auth/user';
import { AuthService } from '../../auth/auth.service';
import { Subscription } from 'rxjs/Subscription';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-tweet-edit',
  templateUrl: './tweet-edit.component.html',
  styleUrls: ['./tweet-edit.component.scss']
})
export class TweetEditComponent implements OnInit {
    user: User;
    tweetMessage = '';
    constructor(private tweetService: TweetService,
                private authService: AuthService) { }

    ngOnInit() {
        this.user = this.authService.currentUser;
    }

    public sendTweet() {
        if (this.tweetMessage !== '') {
            this.tweetService.addTweet(this.tweetMessage, this.user);
            this.tweetMessage = '';
        }
    }
}
