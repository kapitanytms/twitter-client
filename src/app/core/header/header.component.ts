import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    userImg = `url(assets/images/test_user1.jpg)`;
    constructor() { }

    ngOnInit() {}

}
