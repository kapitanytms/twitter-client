import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {AuthGuardService} from './auth/auth-guard.service';
import {AuthModule} from './auth/auth.module';
import {TweetModule} from './tweets/tweet.module';
import {SearchModule} from './search/search.module';

const appRoutes: Routes = [
    {path: 'welcome', loadChildren: () => AuthModule},
    {path: 'home', loadChildren: () => TweetModule, canActivate: [AuthGuardService]},
    {path: 'search', loadChildren: () => SearchModule, canActivate: [AuthGuardService] }
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
