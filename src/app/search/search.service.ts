import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

// The purpose of this service is to communicate query parameters
// and data between SearchComponent and it's child components.
@Injectable()
export class SearchService {
    private tweetResultsCount = new Subject<number>();
    private userResultsCount = new Subject<number>();
    private queryParam = new BehaviorSubject<string>(null);
    tweetResultsCount$ = this.tweetResultsCount.asObservable();
    userResultsCount$ = this.userResultsCount.asObservable();
    queryParam$ = this.queryParam.asObservable();

    // Emit the new query parameter
    addQuery(param: string) {
        this.queryParam.next(param);
    }

    // Emit the number of tweets found
    reportTweetResults(num: number) {
        this.tweetResultsCount.next(num);
    }

    // Emit the number of users found
    reportUserResults(num: number) {
        this.userResultsCount.next(num);
    }

}
