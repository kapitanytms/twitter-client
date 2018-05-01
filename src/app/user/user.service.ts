import { Injectable } from '@angular/core';
import {User} from '../auth/user';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class UserService {
  userCollection: AngularFirestoreCollection<User>;
  userDoc: AngularFirestoreDocument<User>;
  user: Observable<User>;
  constructor(private afs: AngularFirestore) { }



  getUser(id: string) {
    this.userDoc = this.afs.doc<User>(`users/${id}`);
    this.user = this.userDoc.valueChanges();
    // this.user = new User('Tamas', 'Kapitany', 'kaptom', 'kaptom@email.com', '');
    return this.user;
  }
}
