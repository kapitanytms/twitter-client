import { Injectable } from '@angular/core';
import {Tweet} from './tweet';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../auth/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class TweetService {

    private tweetsCollection: AngularFirestoreCollection<Tweet>;
    tweets: Observable<Tweet[]>;
    constructor(private afs: AngularFirestore, private afa: AngularFireAuth) {
        this.tweetsCollection = this.afs.collection<Tweet>('tweets');
        this.tweets = this.tweetsCollection.valueChanges();
    }

    public addTweet(tweet): void {
        const id = this.afs.createId();
        const ownerId = this.afa.auth.currentUser.uid;
        this.tweetsCollection.add({id: id, owner_id: ownerId, text: tweet, date: Date.now() });
    }
}
