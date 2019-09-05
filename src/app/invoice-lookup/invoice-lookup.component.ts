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
  proXtraId: string;
  company: string;
  fullName: string;
  address: string;
  email: string;
  phoneNumber: string;
  signUpDate: string;
  storesPurchasedFrom: string;
  status: string;
}

const data: ProductInfo[] = [
  {
    proXtraId: '1234567',
    company: 'COMPANY',
    fullName: 'LAST NAME, FIRST NAME',
    address: 'ADDRESS 1, ADDRESS 2, CITY, STATE ZIP',
    email: 'FIRSTNAME.LASTNAME@EMAIL.COM',
    phoneNumber: '(555) 555-5555',
    signUpDate: 'MM/DD/YYYY',
    storesPurchasedFrom: '001, 002, 003, 004',
    status: 'created'
  },
  {
    proXtraId: '1234567',
    company: 'COMPANY',
    fullName: 'LAST NAME, FIRST NAME',
    address: 'ADDRESS 1, ADDRESS 2, CITY, STATE ZIP',
    email: 'FIRSTNAME.LASTNAME@EMAIL.COM',
    phoneNumber: '(555) 555-5555',
    signUpDate: 'MM/DD/YYYY',
    storesPurchasedFrom: '001, 002, 003, 004',
    status: 'created'
  },
  {
    proXtraId: '1234567',
    company: 'COMPANY',
    fullName: 'LAST NAME, FIRST NAME',
    address: 'ADDRESS 1, ADDRESS 2, CITY, STATE ZIP',
    email: 'FIRSTNAME.LASTNAME@EMAIL.COM',
    phoneNumber: '(555) 555-5555',
    signUpDate: 'MM/DD/YYYY',
    storesPurchasedFrom: '001, 002, 003, 004',
    status: 'created'
  },
  {
    proXtraId: '1234567',
    company: 'COMPANY',
    fullName: 'LAST NAME, FIRST NAME',
    address: 'ADDRESS 1, ADDRESS 2, CITY, STATE ZIP',
    email: 'FIRSTNAME.LASTNAME@EMAIL.COM',
    phoneNumber: '(555) 555-5555',
    signUpDate: 'MM/DD/YYYY',
    storesPurchasedFrom: '001, 002, 003, 004',
    status: 'pending'
  },
  {
    proXtraId: '1234567',
    company: 'COMPANY',
    fullName: 'LAST NAME, FIRST NAME',
    address: 'ADDRESS 1, ADDRESS 2, CITY, STATE ZIP',
    email: 'FIRSTNAME.LASTNAME@EMAIL.COM',
    phoneNumber: '(555) 555-5555',
    signUpDate: 'MM/DD/YYYY',
    storesPurchasedFrom: '001, 002, 003, 004',
    status: 'none'
  },
  {
    proXtraId: '1234567',
    company: 'COMPANY',
    fullName: 'LAST NAME, FIRST NAME',
    address: 'ADDRESS 1, ADDRESS 2, CITY, STATE ZIP',
    email: 'FIRSTNAME.LASTNAME@EMAIL.COM',
    phoneNumber: '(555) 555-5555',
    signUpDate: 'MM/DD/YYYY',
    storesPurchasedFrom: '001, 002, 003, 004',
    status: 'none'
  },
  {
    proXtraId: '1234567',
    company: 'COMPANY',
    fullName: 'LAST NAME, FIRST NAME',
    address: 'ADDRESS 1, ADDRESS 2, CITY, STATE ZIP',
    email: 'FIRSTNAME.LASTNAME@EMAIL.COM',
    phoneNumber: '(555) 555-5555',
    signUpDate: 'MM/DD/YYYY',
    storesPurchasedFrom: '001, 002, 003, 004',
    status: 'none'
  },
  {
    proXtraId: '1234567',
    company: 'COMPANY',
    fullName: 'LAST NAME, FIRST NAME',
    address: 'ADDRESS 1, ADDRESS 2, CITY, STATE ZIP',
    email: 'FIRSTNAME.LASTNAME@EMAIL.COM',
    phoneNumber: '(555) 555-5555',
    signUpDate: 'MM/DD/YYYY',
    storesPurchasedFrom: '001, 002, 003, 004',
    status: 'none'
  },
  {
    proXtraId: '1234567',
    company: 'COMPANY',
    fullName: 'LAST NAME, FIRST NAME',
    address: 'ADDRESS 1, ADDRESS 2, CITY, STATE ZIP',
    email: 'FIRSTNAME.LASTNAME@EMAIL.COM',
    phoneNumber: '(555) 555-5555',
    signUpDate: 'MM/DD/YYYYUND',
    storesPurchasedFrom: '001, 002, 003, 004',
    status: 'none'
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
  selector: 'app-invoice-lookup',
  templateUrl: './invoice-lookup.component.html',
  styleUrls: ['./invoice-lookup.component.scss'],
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
export class InvoiceLookupComponent implements OnInit {
  currentWindowWidth: number;
  currentIndex: number = null;

  // fake combobox values and auto-complete for demo
  searchTermOne = '';
  searchTermTwo = '';
  searchTermThree = '';
  searchTermFour = '';
  dropdownValues1 = ['a', 'b', 'c', 'd'];
  dropdownValues2 = ['a', 'b', 'c', 'd'];
  dropdownValues3 = ['a', 'b', 'c', 'd'];
  dropdownValues4 = ['a', 'b', 'c', 'd'];

  // fake values for semantic ui select
  selectedOption = [];
  options: Array<string> = ['one', 'two', 'three', 'four', 'five'];

  selectedOption2 = [];
  options2: Array<string> = ['one', 'two', 'three', 'four', 'five'];

  expandedData: any;
  displayedColumns = ['proXtraId', 'fullName', 'phoneNumber'];
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
