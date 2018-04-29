export interface TweetItem {
    id?: string;
    owner_id: string;
    text: string;
    date: number;
    likes: string[];
}

export class Tweet implements TweetItem {
    public id?: string;
    public owner_id: string;
    public text: string;
    public date: number;
    public likes: string[];
    constructor(id, owner_id, text, date, likes) {
        this.id = id;
        this.owner_id = owner_id;
        this.text = text;
        this.date = date;
        this.likes = likes;
    }
}
