export class Tweet {
    static tweetCounter = 0;

    public id: string;
    public owner_id: string;
    public text: string;
    constructor(owner_id, text) {
        this.owner_id = owner_id;
        this.text = text;
        Tweet.tweetCounter++;
        this.id = 'tweet' + Tweet.tweetCounter;
    }
}
