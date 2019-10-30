import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {AngularFireModule} from '@angular/fire';
import { environment} from '../environments/environment';

import {AngularFirestore} from '@angular/fire/firestore';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FormsModule }   from '@angular/forms';
import { AppService } from './app.service';
import { firestore } from 'firebase';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'firebaseApp'),
    AngularFireAuthModule,
    AngularFireModule,
    AngularFireStorageModule,
    FormsModule
  ],
  providers: [AppService, AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
