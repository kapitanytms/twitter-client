import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TweetRoutingModule} from './tweet-routing.module';
import {TweetEditComponent} from './tweet-edit/tweet-edit.component';
import {TweetListComponent} from './tweet-list/tweet-list.component';
import {TweetItemComponent} from './tweet-list/tweet-item/tweet-item.component';
import {TweetsComponent} from './tweets.component';
import {TweetService} from './tweet.service';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TweetRoutingModule
  ],
  declarations: [
      TweetEditComponent,
      TweetListComponent,
      TweetItemComponent,
      TweetsComponent
  ],
  exports: [TweetRoutingModule],
  providers: [TweetService]
})
export class TweetModule { }
