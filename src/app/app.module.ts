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
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HighlightComponent,
    PanelComponent,
    FooterComponent,
    HomepageComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    NgxPageScrollModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
