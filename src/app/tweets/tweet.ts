import { User } from '../auth/user';

export class Tweet {
    public id?: string;
    public user: User;
    public text: string;
    public date: number;
    public likes: string[];
    constructor(id, user, text, date, likes) {
        this.id = id;
        this.user = user;
        this.text = text;
        this.date = date;
        this.likes = likes;
    }
}
