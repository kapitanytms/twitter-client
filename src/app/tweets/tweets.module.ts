import { TweetStartComponent } from './tweet-start/tweet-start.component';
import { TweetsComponent } from './tweets.component';
import { TweetListComponent } from './tweet-list/tweet-list.component';
import { TweetService } from './tweet.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TweetDetailComponent } from './tweet-detail/tweet-detail.component';
import { TweetEditComponent } from './tweet-edit/tweet-edit.component';
import { FormsModule } from '@angular/forms';
import { TweetComponent } from './tweet-list/tweet/tweet.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [TweetService],
  declarations: [
    TweetsComponent,
    TweetStartComponent,
    TweetDetailComponent,
    TweetEditComponent,
    TweetListComponent,
    TweetComponent
  ]
})
export class TweetsModule { }
