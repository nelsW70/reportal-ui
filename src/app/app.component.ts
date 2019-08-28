import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  currentWindowWidth: number;
  title = 'reportal';

  // sidenav menu status
  opened = false;

  // large screen tab nav
  links = [
    { path: 'pricing-lookup', label: 'Pricing Lookup' },
    { path: 'thd-prospects', label: 'THD Prospects' },
    { path: 'eDealer', label: 'eDealer Data' }
  ];
  activeLink = this.links[0];

  ngOnInit() {
    this.currentWindowWidth = window.innerWidth;
  }

  // fake for demo to calculate window size on resize and show/different size screen
  // this would be expensive if anyone resizes and should only be implemented in the onInit
  // method if used
  @HostListener('window:resize')
  onResize() {
    this.currentWindowWidth = window.innerWidth;
  }
}
