export class Tweet {
    static tweetCounter = 0;

    public id: string;
    public owner_id: string;
    public text: string;
    public date: number;
    constructor(owner_id, text, date) {
        this.owner_id = owner_id;
        this.text = text;
        Tweet.tweetCounter++;
        this.id = 'tweet' + Tweet.tweetCounter;
        this.date = date;
    }
}
