import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  tomiPhotoUrl = 'assets/images/tomi.png';
  papiPhotoUrl = 'assets/images/papi.png'
  constructor() { }

  ngOnInit() {
  }

}
