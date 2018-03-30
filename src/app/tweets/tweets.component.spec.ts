import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetsComponent } from './tweets.component';
import {TweetEditComponent} from './tweet-edit/tweet-edit.component';
import {TweetListComponent} from './tweet-list/tweet-list.component';
import {FormsModule} from '@angular/forms';

describe('TweetsComponent', () => {
  let component: TweetsComponent;
  let fixture: ComponentFixture<TweetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TweetsComponent, TweetEditComponent, TweetListComponent ],
      imports: [FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
