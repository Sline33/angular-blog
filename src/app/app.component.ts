import { Component } from '@angular/core';

import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-blog';

  constructor() {
    const config = {
      apiKey: "AIzaSyBHqtFY77hPYE3jFoBBgSuzsw1KpRT9AeY",
      authDomain: "blog-1cb5a.firebaseapp.com",
      databaseURL: "https://blog-1cb5a.firebaseio.com",
      projectId: "blog-1cb5a",
      storageBucket: "blog-1cb5a.appspot.com",
      messagingSenderId: "313408861316"
    };
    firebase.initializeApp(config);
  }
}
