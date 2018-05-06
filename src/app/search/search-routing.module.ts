import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search.component';

const searchRoutes: Routes = [
    { path: ':queryParam', component: SearchComponent }
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
