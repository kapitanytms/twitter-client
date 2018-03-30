import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetListComponent } from './tweet-list.component';
import {TweetItemComponent} from './tweet-item/tweet-item.component';
import {FormsModule} from '@angular/forms';
import {TweetService} from '../tweet.service';
import {BrowserDynamicTestingModule} from '@angular/platform-browser-dynamic/testing';

describe('TweetListComponent', () => {
  let component: TweetListComponent;
  let fixture: ComponentFixture<TweetListComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
          TweetListComponent,
          TweetItemComponent
      ],
      providers: [TweetService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
