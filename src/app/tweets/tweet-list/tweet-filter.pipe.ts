import { Pipe, PipeTransform } from '@angular/core';
import { Tweet } from '../tweet';

@Pipe({
    name: 'tweetFilter',
    pure: true
})

export class TweetFilterPipe implements PipeTransform {
    transform(tweets: Tweet[], criteria: string): any {
        if (tweets === undefined) {
            return tweets;
        }
        switch (criteria) {
            case 'date':
                return tweets.sort((a, b) => b.date - a.date);
            case 'likes':
                return tweets.sort((a, b) => b.likes.length - a.likes.length);
        }
    }
}
