import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { NavbarItemsComponent } from './components/navbar-items/navbar-items.component';
import { FooterItemsComponent } from './components/footer-items/footer-items.component';
import { HeaderItemsComponent } from './components/header-items/header-items.component';
import { NewsComponent } from './components/news/news.component';
import { SubsidiariesComponent } from './components/subsidiaries/subsidiaries.component';
import { CommunityServiceComponent } from './components/community-service/community-service.component';
import { NewsArticleComponent } from './components/news-article/news-article.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ContactPageComponent,
    AboutPageComponent,
    NavbarItemsComponent,
    FooterItemsComponent,
    HeaderItemsComponent,
    NewsComponent,
    SubsidiariesComponent,
    CommunityServiceComponent,
    NewsArticleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
