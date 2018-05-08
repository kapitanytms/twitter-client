import { Injectable } from '@angular/core';
import { Tweet } from './tweet';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../auth/auth.service';
import { AngularFireAuth, AUTH_PROVIDERS } from 'angularfire2/auth';
import { User } from '../auth/user';

@Injectable()
export class TweetService {

    private tweetsCollection: AngularFirestoreCollection<Tweet>;
    tweets$: Observable<Tweet[]>;

    constructor(private afs: AngularFirestore, private authService: AuthService) {
        this.tweetsCollection = this.afs.collection<Tweet>('tweets');
        this.tweets$ = this.tweetsCollection.snapshotChanges()
            .map(actions => {
                return actions.map(action => {
                    const data = action.payload.doc.data() as Tweet;
                    const id = action.payload.doc.id;
                    return { id, ...data };
                });
        });
    }

    public addTweet(tweetMessage: string, user: User): void {
        this.tweetsCollection.add({
            user: {
                uid: user.uid,
                username: user.username,
                firstname: user.firstname,
                lastname: user.lastname,
                email: user.email
            },
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
