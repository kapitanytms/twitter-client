import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import {HeaderComponent} from './core/header/header.component';
import {FormsModule} from '@angular/forms';
import {ParticlesModule} from 'angular-particle';
import {CoreModule} from './core/core.module';
import {AuthService} from './auth/auth.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
      ],
      imports: [
          RouterTestingModule,
          CoreModule,
          ParticlesModule
      ],
        providers: [AuthService]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
