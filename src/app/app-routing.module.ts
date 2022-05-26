import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './components/home-page/home-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { AboutPageComponent } from './components/about-page/about-page.component'
import { SubsidiariesComponent } from './components/subsidiaries/subsidiaries.component';
import { CommunityServiceComponent } from './components/community-service/community-service.component';
import { NewsComponent } from './components/news/news.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { component: HomePageComponent, path: 'home' },
  { component: SubsidiariesComponent, path: 'subsidiaries' },
  { component: AboutPageComponent, path: 'about' },
  { component: CommunityServiceComponent, path: 'community-service' },
  { component: NewsComponent, path: 'news' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
