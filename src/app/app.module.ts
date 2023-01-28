import { NgModule } from '@angular/core';
import {
  FirebaseOptions,
  initializeApp,
  provideFirebaseApp,
} from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { BrowserModule } from '@angular/platform-browser';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(getFirebaseSetting)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

export const getFirebaseSetting: FirebaseOptions = {
  projectId: environment.envVar.firebaseProjectId,
  appId: environment.envVar.firebaseAppId,
  storageBucket: environment.envVar.firebaseStorageBucket,
  apiKey: environment.envVar.firebaseApiKey,
  authDomain: environment.envVar.firebaseAuthDomain,
  messagingSenderId: environment.envVar.firebaseMessagingSenderId,
};
