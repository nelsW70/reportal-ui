import { Component, OnInit, HostListener } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Observable, of } from 'rxjs';
import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';

export interface ProductInfo {
  customerName: string;
  companyName: string;
  company: string;
  fullName: string;
  address: string;
  email: string;
  pastDueTotal: string;
  signUpDate: string;
  storesPurchasedFrom: string;
  status: string;
}

const data: ProductInfo[] = [
  {
    customerName: '1234567',
    companyName:
      'Walt Disney World ALL STAR RESORT-TRAVISAVAN fggdgfgfdgfdgfdgfdgfdggfgdfgfdgfgfdgfdgfgfdg',
    company: 'COMPANY',
    fullName: 'LAST NAME, FIRST NAME',
    address: 'ADDRESS 1, ADDRESS 2, CITY, STATE ZIP',
    email: 'FIRSTNAME.LASTNAME@EMAIL.COM',
    pastDueTotal: '$4,225.01',
    signUpDate: 'MM/DD/YYYY',
    storesPurchasedFrom: '001, 002, 003, 004',
    status: 'open'
  },
  {
    customerName: '1234567',
    companyName: 'Wausau Equipment Co, INC',
    company: 'COMPANY',
    fullName: 'LAST NAME, FIRST NAME',
    address: 'ADDRESS 1, ADDRESS 2, CITY, STATE ZIP',
    email: 'FIRSTNAME.LASTNAME@EMAIL.COM',
    pastDueTotal: '$4,225.01',
    signUpDate: 'MM/DD/YYYY',
    storesPurchasedFrom: '001, 002, 003, 004',
    status: 'approaching'
  },
  {
    customerName: '1234567',
    companyName: 'Hyatt Place',
    company: 'COMPANY',
    fullName: 'LAST NAME, FIRST NAME',
    address: 'ADDRESS 1, ADDRESS 2, CITY, STATE ZIP',
    email: 'FIRSTNAME.LASTNAME@EMAIL.COM',
    pastDueTotal: '$4,225.01',
    signUpDate: 'MM/DD/YYYY',
    storesPurchasedFrom: '001, 002, 003, 004',
    status: 'over'
  },
  {
    customerName: '1234567',
    companyName: 'Alfreda Gallardo',
    company: 'COMPANY',
    fullName: 'LAST NAME, FIRST NAME',
    address: 'ADDRESS 1, ADDRESS 2, CITY, STATE ZIP',
    email: 'FIRSTNAME.LASTNAME@EMAIL.COM',
    pastDueTotal: '$4,225.01',
    signUpDate: 'MM/DD/YYYY',
    storesPurchasedFrom: '001, 002, 003, 004',
    status: 'locked'
  },
  {
    customerName: '1234567',
    companyName: 'DDG Construction',
    company: 'COMPANY',
    fullName: 'LAST NAME, FIRST NAME',
    address: 'ADDRESS 1, ADDRESS 2, CITY, STATE ZIP',
    email: 'FIRSTNAME.LASTNAME@EMAIL.COM',
    pastDueTotal: '$4,225.01',
    signUpDate: 'MM/DD/YYYY',
    storesPurchasedFrom: '001, 002, 003, 004',
    status: 'open'
  },
  {
    customerName: '1234567',
    companyName: 'Telecom Products, INC.',
    company: 'COMPANY',
    fullName: 'LAST NAME, FIRST NAME',
    address: 'ADDRESS 1, ADDRESS 2, CITY, STATE ZIP',
    email: 'FIRSTNAME.LASTNAME@EMAIL.COM',
    pastDueTotal: '$4,225.01',
    signUpDate: 'MM/DD/YYYY',
    storesPurchasedFrom: '001, 002, 003, 004',
    status: 'open'
  },
  {
    customerName: '1234567',
    companyName: 'ROn Testerman Builders',
    company: 'COMPANY',
    fullName: 'LAST NAME, FIRST NAME',
    address: 'ADDRESS 1, ADDRESS 2, CITY, STATE ZIP',
    email: 'FIRSTNAME.LASTNAME@EMAIL.COM',
    pastDueTotal: '$4,225.01',
    signUpDate: 'MM/DD/YYYY',
    storesPurchasedFrom: '001, 002, 003, 004',
    status: 'approaching'
  },
  {
    customerName: '1234567',
    companyName: 'Wausau Equipment Co, INC.',
    company: 'COMPANY',
    fullName: 'LAST NAME, FIRST NAME',
    address: 'ADDRESS 1, ADDRESS 2, CITY, STATE ZIP',
    email: 'FIRSTNAME.LASTNAME@EMAIL.COM',
    pastDueTotal: '$4,225.01',
    signUpDate: 'MM/DD/YYYY',
    storesPurchasedFrom: '001, 002, 003, 004',
    status: 'over'
  },
  {
    customerName: '1234567',
    companyName: 'Lakeside Painting',
    company: 'COMPANY',
    fullName: 'LAST NAME, FIRST NAME',
    address: 'ADDRESS 1, ADDRESS 2, CITY, STATE ZIP',
    email: 'FIRSTNAME.LASTNAME@EMAIL.COM',
    pastDueTotal: '$4,225.01',
    signUpDate: 'MM/DD/YYYYUND',
    storesPurchasedFrom: '001, 002, 003, 004',
    status: 'open'
  }
];

export class MobileDataSource extends DataSource<any> {
  connect(): Observable<ProductInfo[]> {
    const rows = [];
    data.forEach(product => rows.push(product, { detailRow: true, product }));
    return of(rows);
  }

  disconnect() {}
}
@Component({
  selector: 'app-credit-overview',
  templateUrl: './credit-overview.component.html',
  styleUrls: ['./credit-overview.component.scss'],
  animations: [
    trigger('detailExpand', [
      state(
        'collapsed',
        style({ height: '0px', minHeight: '0', visibility: 'hidden' })
      ),
      state('expanded', style({ height: '*', visibility: 'visible' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      )
    ])
  ]
})
export class CreditOverviewComponent implements OnInit {
  currentWindowWidth: number;
  currentIndex: number = null;

  expandedData: any;
  displayedColumns = ['customerName', 'pastDueTotal'];
  dataSource = new MobileDataSource();

  isExpansionDetailRow = (i: number, row: object) =>
    row.hasOwnProperty('detailRow');

  constructor() {}

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
