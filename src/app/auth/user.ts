export class User {
    public uid: string;
    public firstname: string;
    public lastname: string;
    public username: string;
    public email: string;

    constructor(firstname: string, lastname: string, username: string, email: string, uid = '') {
        this.uid = uid;
        this.firstname = firstname;
        this.lastname = lastname;
        this.username = username;
        this.email = email;
    }
}
