import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-site-icons',
  templateUrl: './site-icons.component.html',
  styleUrls: ['./site-icons.component.css']
})
export class SiteIconsComponent implements OnInit {
  hoveredHome: boolean;
  hoveredAbout: boolean;
  hoveredPort: boolean;
  hoveredContact: boolean;

  constructor() { 
    this.hoveredHome = false;
    this.hoveredAbout = false;
    this.hoveredPort = false;
    this.hoveredContact = false;
  }

  ngOnInit(): void {
  }

}
