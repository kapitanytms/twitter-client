import { TweetStartComponent } from './tweet-start/tweet-start.component';
import { TweetsComponent } from './tweets.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const tweetsRoutes: Routes = [
  {path: '', component: TweetsComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(tweetsRoutes)
  ],
  declarations: []
})
export class TweetRoutingModule { }
