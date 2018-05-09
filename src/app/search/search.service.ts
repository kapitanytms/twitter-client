import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class SearchService {
    private tweetResultsCount = new Subject<number>();
    private userResultsCount = new Subject<number>();
    private queryParam = new BehaviorSubject<string>(null);
    tweetResultsCount$ = this.tweetResultsCount.asObservable();
    userResultsCount$ = this.userResultsCount.asObservable();
    queryParam$ = this.queryParam.asObservable();

    addQuery(param: string) {
        this.queryParam.next(param);
    }

    reportTweetResults(num: number) {
        this.tweetResultsCount.next(num);
    }

    reportUserResults(num: number) {
        this.userResultsCount.next(num);
    }

}
