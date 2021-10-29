import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { SiteIconsComponent } from './components/site-icons/site-icons.component';
import { SocialIconsComponent } from './components/social-icons/social-icons.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutPageComponent } from './components/about-page/about-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SiteIconsComponent,
    SocialIconsComponent,
    ContactPageComponent,
    HeaderComponent,
    AboutPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
