import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../shared/user';
import {Subject} from 'rxjs/Subject';
import {AngularFireAuth} from 'angularfire2/auth';

@Injectable()
export class AuthService {
  token: string;
  userChanged = new  Subject<User>();
  constructor(private router: Router, private afAuth: AngularFireAuth) { }

    signInUser(email: string, password: string) {
        this.afAuth.auth.signInWithEmailAndPassword(email, password)
            .then((res) => {
                this.router.navigate(['/home']);
                this.afAuth.auth.currentUser.getIdToken()
                    .then((token: string) => this.token = token);
            })
            .catch(error => {console.log(error); });
    }

    signUpUser(email: string, password: string) {
        this.afAuth.auth.createUserWithEmailAndPassword(email, password)
            .catch(
                error => console.log(error)
            );
    }

    signOut() {
        this.afAuth.auth.signOut();
        this.token = null;
        this.router.navigate(['/']);
    }

    getToken() {
        this.afAuth.auth.currentUser.getToken()
            .then(
                (token: string) => this.token = token
            );
        return this.token;
    }

    isAuthenticated() {
        return this.token != null;
    }
}
