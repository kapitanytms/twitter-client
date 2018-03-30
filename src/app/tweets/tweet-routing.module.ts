import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {TweetsComponent} from './tweets.component';
import {TweetListComponent} from './tweet-list/tweet-list.component';
import {TweetEditComponent} from './tweet-edit/tweet-edit.component';

const tweetRoutes: Routes = [
    {path: '', component: TweetsComponent, children: [
      {path: 'feed', component: TweetListComponent},
      {path: 'edit', component: TweetEditComponent}
    ]}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(tweetRoutes)
  ],
  declarations: [],
  exports: [
      RouterModule
  ]
})
export class TweetRoutingModule { }
