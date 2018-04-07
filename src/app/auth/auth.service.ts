import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {AngularFireAuth} from 'angularfire2/auth';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {User} from './user';

@Injectable()
export class AuthService {
  token: string;
  private _userCollection: AngularFirestoreCollection<User>;
  constructor(private router: Router, private afAuth: AngularFireAuth, private _afs: AngularFirestore) {
    this._userCollection = this._afs.collection('users');
  }

    signInUser(email: string, password: string) {
        this.afAuth.auth.signInWithEmailAndPassword(email, password)
            .then((res) => {
                this.router.navigate(['/home']);
                this.afAuth.auth.currentUser.getIdToken()
                    .then((token: string) => this.token = token);
            })
            .catch(error => {console.log(error); });
    }

    signUpUser(user: User, password: string) {
        this.afAuth.auth.createUserWithEmailAndPassword(user.email, password)
            .then(res => {
                user.uid = res.uid;
                this._userCollection.doc(user.uid).set(user)
                    .then(() => console.log('success'));
            })
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
