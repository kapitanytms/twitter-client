import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { SearchRoutingModule } from './search-routing.module';
import { FormsModule } from '@angular/forms';
import { TabMenuModule } from 'primeng/tabmenu';
import { MenuItem } from 'primeng/api';
import { TweetModule } from '../tweets/tweet.module';
import { TweetItemComponent } from '../tweets/tweet-list/tweet-item/tweet-item.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SearchRoutingModule,
    TabMenuModule,
    TweetModule
  ],
  declarations: [SearchComponent],
  exports: [
    SearchRoutingModule
  ]
})
export class SearchModule { }
