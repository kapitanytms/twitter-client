import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProjectComponent } from './welcome/project/project.component';
import { WelcomeRoutingModule } from './welcome-routing.module';
import { CreatorsComponent } from './welcome/creators/creators.component';


@NgModule({
  imports: [
    CommonModule,
    WelcomeRoutingModule
  ],
  declarations: [
    HeaderComponent,
    HomeComponent,
    WelcomeComponent,
    ProjectComponent,
    CreatorsComponent,
  ],
  exports: [
    HeaderComponent,
  ]
})
export class CoreModule { }
