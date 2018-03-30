import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {WelcomeComponent} from './welcome/welcome.component';
import {RouterModule, Routes} from '@angular/router';
import {SignInComponent} from './sign-in/sign-in.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {ProjectComponent} from './project/project.component';
import {AboutComponent} from './about/about.component';

const authRoutes: Routes = [
    { path: '', component: WelcomeComponent, children: [
      { path: '', redirectTo: 'sign_in', pathMatch: 'full' },
      { path: 'sign_in', component: SignInComponent },
      { path: 'sign_up', component: SignUpComponent },
      { path: 'project', component: ProjectComponent },
      { path: 'about_us', component: AboutComponent },
        ]}
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(authRoutes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
