import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteIconsComponent } from './site-icons.component';

describe('SiteIconsComponent', () => {
  let component: SiteIconsComponent;
  let fixture: ComponentFixture<SiteIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteIconsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
