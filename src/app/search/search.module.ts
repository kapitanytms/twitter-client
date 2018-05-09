import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { SearchRoutingModule } from './search-routing.module';
import { FormsModule } from '@angular/forms';
import { TabMenuModule } from 'primeng/tabmenu';
import { MenuItem } from 'primeng/api';
import { TweetModule } from '../tweets/tweet.module';
import { TweetItemComponent } from '../tweets/tweet-list/tweet-item/tweet-item.component';
import { UserItemComponent } from './search-user/user-item/user-item.component';
import { SearchTweetComponent } from './search-tweet/search-tweet.component';
import { SearchUserComponent } from './search-user/search-user.component';
import { SearchService } from './search.service';
import { TweetFilterPipe } from './search-tweet/tweet-filter.pipe';

// Purpose of this module is to handle a single query parameter string
// and visualize the tweets and users found in the database.
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SearchRoutingModule,
    TabMenuModule,
    TweetModule
  ],
  declarations: [SearchComponent, SearchTweetComponent, SearchUserComponent, UserItemComponent, TweetFilterPipe],
  exports: [
    SearchRoutingModule
  ],
  providers: [
    SearchService
  ]
})
export class SearchModule { }
