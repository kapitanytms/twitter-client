import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetEditComponent } from './tweet-edit.component';
import {FormsModule} from '@angular/forms';
import {TweetService} from '../tweet.service';

describe('TweetEditComponent', () => {
  let component: TweetEditComponent;
  let fixture: ComponentFixture<TweetEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TweetEditComponent ],
      imports: [FormsModule],
      providers: [TweetService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
