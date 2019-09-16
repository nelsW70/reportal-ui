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
  customerNumber: string;
  totalCreditLimit: string;
  totalRemainingCredit: string;
  pastDueTotal: string;
  totalPastDue: string;
  totalCurrentBalance: string;
  status: string;
}

const data: ProductInfo[] = [
  {
    customerName: '1234567',
    companyName: 'Walt Disney World ALL STAR RESORT-TRAVISAVAN',
    customerNumber: '3056058505000',
    totalCreditLimit: '$50,000.00',
    totalRemainingCredit: '$50,225.01',
    pastDueTotal: '$4,225.01',
    totalPastDue: '$4,225.01',
    totalCurrentBalance: '$1,685.00',
    status: 'open'
  },
  {
    customerName: '1234567',
    companyName: 'Wausau Equipment Co, INC',
    customerNumber: '3056058505000',
    totalCreditLimit: '$50,000.00',
    totalRemainingCredit: '$50,225.01',
    pastDueTotal: '$4,225.01',
    totalPastDue: '$4,225.01',
    totalCurrentBalance: '$1,685.00',
    status: 'approaching'
  },
  {
    customerName: '1234567',
    companyName: 'Hyatt Place',
    customerNumber: '3056058505000',
    totalCreditLimit: '$50,000.00',
    totalRemainingCredit: '$50,225.01',
    pastDueTotal: '$4,225.01',
    totalPastDue: '$4,225.01',
    totalCurrentBalance: '$1,685.00',
    status: 'over'
  },
  {
    customerName: '1234567',
    companyName: 'Alfreda Gallardo',
    customerNumber: '3056058505000',
    totalCreditLimit: '$50,000.00',
    totalRemainingCredit: '$50,225.01',
    pastDueTotal: '$4,225.01',
    totalPastDue: '$4,225.01',
    totalCurrentBalance: '$1,685.00',
    status: 'locked'
  },
  {
    customerName: '1234567',
    companyName: 'DDG Construction',
    customerNumber: '3056058505000',
    totalCreditLimit: '$50,000.00',
    totalRemainingCredit: '$50,225.01',
    pastDueTotal: '$4,225.01',
    totalPastDue: '$4,225.01',
    totalCurrentBalance: '$1,685.00',
    status: 'open'
  },
  {
    customerName: '1234567',
    companyName: 'Telecom Products, INC.',
    customerNumber: '3056058505000',
    totalCreditLimit: '$50,000.00',
    totalRemainingCredit: '$50,225.01',
    pastDueTotal: '$4,225.01',
    totalPastDue: '$4,225.01',
    totalCurrentBalance: '$1,685.00',
    status: 'open'
  },
  {
    customerName: '1234567',
    companyName: 'Ron Testerman Builders',
    customerNumber: '3056058505000',
    totalCreditLimit: '$50,000.00',
    totalRemainingCredit: '$50,225.01',
    pastDueTotal: '$4,225.01',
    totalPastDue: '$4,225.01',
    totalCurrentBalance: '$1,685.00',
    status: 'approaching'
  },
  {
    customerName: '1234567',
    companyName: 'Wausau Equipment Co, INC.',
    customerNumber: '3056058505000',
    totalCreditLimit: '$50,000.00',
    totalRemainingCredit: '$50,225.01',
    pastDueTotal: '$4,225.01',
    totalPastDue: '$4,225.01',
    totalCurrentBalance: '$1,685.00',
    status: 'over'
  },
  {
    customerName: '1234567',
    companyName: 'Lakeside Painting',
    customerNumber: '3056058505000',
    totalCreditLimit: '$50,000.00',
    totalRemainingCredit: '$50,225.01',
    pastDueTotal: '$4,225.01',
    totalPastDue: '$4,225.01',
    totalCurrentBalance: '$1,685.00',
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
