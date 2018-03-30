import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {AuthGuardService} from './auth/auth-guard.service';

const appRoutes: Routes = [
    {path: 'welcome', loadChildren: './auth/auth.module#AuthModule'},
    {path: 'home', loadChildren: './tweets/tweet.module#TweetModule', canActivate: [AuthGuardService]}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules}),
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
