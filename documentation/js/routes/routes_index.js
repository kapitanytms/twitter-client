var ROUTES_INDEX = {"name":"<root>","kind":"module","className":"AppModule","children":[{"name":"appRoutes","filename":"src/app/app-routing.module.ts","module":"AppRoutingModule","children":[{"path":"welcome","loadChildren":"./auth/auth.module#AuthModule"},{"path":"home","loadChildren":"./tweets/tweet.module#TweetModule","canActivate":["AuthGuardService"]}],"kind":"module"},{"name":"authRoutes","filename":"src/app/auth/auth-routing.module.ts","module":"AuthRoutingModule","children":[{"path":"","component":"WelcomeComponent","children":[{"path":"","redirectTo":"sign_in","pathMatch":"full"},{"path":"sign_in","component":"SignInComponent"},{"path":"sign_up","component":"SignUpComponent"},{"path":"project","component":"ProjectComponent"},{"path":"about_us","component":"AboutComponent"}]}],"kind":"module"},{"name":"tweetRoutes","filename":"src/app/tweets/tweet-routing.module.ts","module":"TweetRoutingModule","children":[{"path":"","component":"TweetsComponent","children":[{"path":"feed","component":"TweetListComponent"},{"path":"edit","component":"TweetEditComponent"}]}],"kind":"module"}]}
