import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../shared/user';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class AuthService {
  user: User;
  userChanged = new  Subject<User>();
  constructor(private router: Router) { }

    signinUser(email: string, password: string) {
        if (email === 'testuser@email.com' && password === 'testpass') {
            this.user = {email: email, password: password, username: 'Test'};
            this.userChanged.next(this.user);
            this.router.navigate(['/home']);
        }
    }

    signOut() {
        this.user = null;
        this.userChanged.next(null);
        this.router.navigate(['/']);
    }

    isAuthenticated() {
        return this.user != null;
    }
}
