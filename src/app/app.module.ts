import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import {NgxPageScrollModule} from 'ngx-page-scroll';

import { HighlightComponent } from './highlight/highlight.component';
import { PanelComponent } from './panel/panel.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HighlightComponent,
    PanelComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    NgxPageScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
