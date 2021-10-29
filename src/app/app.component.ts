import { Component } from '@angular/core';

import { HeaderComponent } from './components/header/header.component'
import { SiteIconsComponent } from './components/site-icons/site-icons.component';
import { SocialIconsComponent } from './components/social-icons/social-icons.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-ui';
}
