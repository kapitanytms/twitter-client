import { Pipe, PipeTransform } from '@angular/core';
import { Tweet } from '../../tweets/tweet';
import { SearchService } from '../search.service';

@Pipe({
    name: 'filter',
    pure: false
})

export class TweetFilterPipe implements PipeTransform {

    tweetsCount = 0;
    constructor(private searchService: SearchService) {}

    transform(tweets: Tweet[], param: string): any {
        if (tweets) {
            const filteredTweets = tweets.filter((a) =>
                a.text.includes(param) || a.user.username.includes(param)
            );
            if (this.tweetsCount !== filteredTweets.length) {
                this.tweetsCount = filteredTweets.length;
                this.searchService.reportTweetResults(this.tweetsCount);
            }
            return filteredTweets;
        }
        return tweets;
    }
}
