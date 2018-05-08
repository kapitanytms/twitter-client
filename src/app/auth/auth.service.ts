import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {AngularFireAuth} from 'angularfire2/auth';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {User} from './user';
import { Observable } from 'rxjs/Observable';
import { take } from 'rxjs/operators';
import { Subscription } from 'rxjs/Subscription';

@Injectable()
export class AuthService {

  token: string;
  private userCollection: AngularFirestoreCollection <User>;
  users$: Observable<User[]>;
  currentUser: User;
  private users: User[];
  private usersSubscription: Subscription;

  constructor(private router: Router,
              private afAuth: AngularFireAuth,
              private _afs: AngularFirestore) {
    this.userCollection = this._afs.collection <User>('users');
    this.usersSubscription = this.userCollection
      .snapshotChanges().map(actions => {
        return actions.map(action => {
            const data = action.payload.doc.data() as User;
            const id = action.payload.doc.id;
            return { id, ...data };
        });
    }).subscribe(
      (users) => this.users = users
    );
  }

  signInUser(email: string, password: string) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((res) => {
        this.router.navigate(['/home']);
        this.afAuth.auth.currentUser.getIdToken()
          .then((token: string) => {
            this.token = token;
            this.currentUser = this.users.find(
              (user) => user.uid === this.afAuth.auth.currentUser.uid);
          });
      })
      .catch(error => {
        console.log(error);
      });
  }

  signUpUser(user: User, password: string) {
    this.afAuth.auth.createUserWithEmailAndPassword(user.email, password)
      .then(res => {
        user.uid = res.uid;
        this.userCollection.doc(user.uid).set(user)
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

  getUsers(): User[] {
    return this.users;
  }
}

