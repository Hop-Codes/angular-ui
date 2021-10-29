import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-icons',
  templateUrl: './social-icons.component.html',
  styleUrls: ['./social-icons.component.css']
})
export class SocialIconsComponent implements OnInit {
  hoveredLinkedIn: boolean;
  hoveredFacebook: boolean;
  hoveredInstagram: boolean;

  constructor() { 
    this.hoveredLinkedIn = false;
    this.hoveredFacebook = false;
    this.hoveredInstagram = false;
  }

  ngOnInit(): void {
  }

}
