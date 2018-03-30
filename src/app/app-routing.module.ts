import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
    {path: 'welcome', loadChildren: './auth/auth.module#AuthModule' },
    {path: 'home', loadChildren: './tweets/tweet.module#TweetModule'}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
