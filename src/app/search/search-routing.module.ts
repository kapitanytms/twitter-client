import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search.component';
import { SearchTweetComponent } from './search-tweet/search-tweet.component';
import { SearchUserComponent } from './search-user/search-user.component';

const searchRoutes: Routes = [
    { path: ':q', component: SearchComponent, children: [
        { path: '', redirectTo: 'tweets', pathMatch: 'full' },
        { path: 'tweets', component: SearchTweetComponent },
        { path: 'users', component: SearchUserComponent },
    ] }
];

@NgModule({
    imports: [
      CommonModule,
      RouterModule.forChild(searchRoutes)
    ],
    declarations: [],
    exports: [
        RouterModule
    ]
  })
export class SearchRoutingModule { }
