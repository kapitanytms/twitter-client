import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome/welcome.component';
import {AuthRoutingModule} from './auth-routing.module';
import {SignUpComponent} from './sign-up/sign-up.component';
import {SignInComponent} from './sign-in/sign-in.component';
import {ProjectComponent} from './project/project.component';
import {AboutComponent} from './about/about.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    WelcomeComponent,
    SignUpComponent,
    SignInComponent,
    ProjectComponent,
    AboutComponent
  ],
  exports: [AuthRoutingModule],
})
export class AuthModule { }
