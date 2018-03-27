import { Tweet } from './tweet';
import { Injectable } from '@angular/core';

@Injectable()
export class TweetService {

  tweets: Tweet[];
  constructor() {
    this.tweets = [
      new Tweet('owner1', 'This is a test tweet.'),
      new Tweet('owner2', 'This is a test tweet.'),
    ];
   }

   public getTweets(): Tweet[] {
     return this.tweets;
   }

   public addTweet(tweet): void {
     this.tweets.push(new Tweet('owner1', tweet));
   }
}
