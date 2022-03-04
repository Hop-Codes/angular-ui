import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './components/home-page/home-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { AboutPageComponent } from './components/about-page/about-page.component'

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { component: HomePageComponent, path: 'home' },
  { component: ContactPageComponent, path: 'contact' },
  { component: AboutPageComponent, path: 'about' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
