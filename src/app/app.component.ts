import { Component } from '@angular/core';

import { getFirebaseSetting } from './app.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor() {
    console.log(getFirebaseSetting);
  }

  title = 'firebase-pg';
}
