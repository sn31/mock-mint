import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import {NgxPageScrollModule} from 'ngx-page-scroll';
import { HighlightComponent } from './highlight/highlight.component';
import { PanelComponent } from './panel/panel.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { routing } from './app.routing';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { masterFirebaseConfig } from './api-keys';
import { PrivateComponent } from './private/private.component';
import { PrivatenavComponent } from './privatenav/privatenav.component';
import { OverviewComponent } from './overview/overview.component';
import { TransactionComponent } from './transaction/transaction.component';
import {AuthGuard} from './services/auth-guard.service.service';
import {AuthenticationService} from './services/authentication.service';
import {PricePipe} from './pipes/price.pipe';
import {AccountPipe} from './pipes/account.pipe';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket,
  messagingSenderId: masterFirebaseConfig.messagingSenderId
};

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HighlightComponent,
    PanelComponent,
    FooterComponent,
    HomepageComponent,
    PrivateComponent,
    PrivatenavComponent,
    OverviewComponent,
    TransactionComponent,
    PricePipe,
    AccountPipe
  ],
  imports: [
    BrowserModule,
    NgxPageScrollModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  providers: [AuthGuard, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
