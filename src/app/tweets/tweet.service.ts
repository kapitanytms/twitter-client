import { Injectable } from '@angular/core';
import { Tweet, TweetItem } from './tweet';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../auth/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from '@firebase/auth-types';

@Injectable()
export class TweetService {

    private tweetsCollection: AngularFirestoreCollection<Tweet>;
    tweets$: Observable<Tweet[]>;

    constructor(private afs: AngularFirestore, private afa: AngularFireAuth) {
        this.tweetsCollection = this.afs.collection<TweetItem>('tweets');
        this.tweets$ = this.tweetsCollection.snapshotChanges()
            .map(actions => {
                return actions.map(action => {
                    const data = action.payload.doc.data() as Tweet;
                    const id = action.payload.doc.id;
                    return { id, ...data };
                });
        });
    }

    get currentUser(): User {
        return this.afa.auth.currentUser;
    }

    public addTweet(tweetMessage): void {
        const ownerId = this.afa.auth.currentUser.uid;
        this.tweetsCollection.add({
            owner_id: ownerId,
            text: tweetMessage,
            date: Date.now(),
            likes: []
        });
    }

    public updateTweet(tweet: Tweet) {
        this.tweetsCollection.doc(tweet.id).update({ likes: tweet.likes });
    }

    public deleteTweet(id: string) {
        this.tweetsCollection.doc(id).delete();
    }

}
