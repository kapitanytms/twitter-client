import {Component, Input, OnInit} from '@angular/core';
import {Tweet} from '../../tweet';

@Component({
  selector: 'app-tweet-item',
  templateUrl: './tweet-item.component.html',
  styleUrls: ['./tweet-item.component.scss']
})
export class TweetItemComponent implements OnInit {

    @Input() tweet: Tweet;
    constructor() { }

    ngOnInit() {
    }
}
