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
  proXtraID: string;
  company: string;
  fullName: string;
  address: string;
  email: string;
  phone: string;
  signUpDate: string;
  storesPurchasedFrom?: string;
  status?: string;
  sapBranchNumber?: string;
}

const data: ProductInfo[] = [
  {
    proXtraID: '6-411/01',
    company: 'S-Hide INT LX EGG WHPB 6-411 B100',
    fullName: '$18.85',
    address: 'GPQ',
    email: 'N',
    phone: '$18.85',
    signUpDate: '$25.75'
  },
  {
    proXtraID: 'AK2LV-B/55',
    company: 'AMERLOCK 2 LV CUBE',
    fullName: '$18.85',
    address: 'GPQ',
    email: '-',
    phone: '$18.85',
    signUpDate: '$25.75'
  },
  {
    proXtraID: 'AK2-T1/01',
    company: 'AMERLOCK 2/400 DEEP TINT RESIN',
    fullName: '$18.85',
    address: '-',
    email: 'Y',
    phone: '-',
    signUpDate: '$25.75'
  },
  {
    proXtraID: '6-411/01',
    company: 'S-HIDE INT LX EGG WHPB 6-411 B100',
    fullName: '$18.85',
    address: 'GPQ',
    email: 'N',
    phone: '$18.85',
    signUpDate: '$25.75'
  },
  {
    proXtraID: '6-411/01',
    company: 'S-HIDE INT LX EGG WHPB 6-411 B100',
    fullName: '$18.85',
    address: 'MGPL',
    email: 'N',
    phone: '$18.85',
    signUpDate: '$25.75'
  },
  {
    proXtraID: '6-411/01',
    company: 'S-HIDE INT LX EGG WHPB 6-411 B100',
    fullName: 'NOT FOUND',
    address: 'GPQ',
    email: 'N',
    phone: 'NOT FOUND',
    signUpDate: '$25.75'
  },
  {
    proXtraID: '6-411/01',
    company: 'S-HIDE INT LX EGG WHPB 6-411 B100',
    fullName: '$18.85',
    address: '-',
    email: '-',
    phone: '$18.85',
    signUpDate: '$25.75'
  },
  {
    proXtraID: '6-411/01',
    company: 'S-HIDE INT LX EGG WHPB 6-411 B100',
    fullName: '$18.85',
    address: 'GPQ',
    email: 'Y',
    phone: '$18.85',
    signUpDate: '$25.75'
  },
  {
    proXtraID: 'AK2LV-B/55',
    company: 'S-HIDE INT LX EGG WHPB 6-411 B100',
    fullName: '$18.85',
    address: 'GPQ',
    email: 'N',
    phone: '$18.85',
    signUpDate: 'NOT FOUND'
  },
  {
    proXtraID: 'AK2LV-B/55',
    company: 'S-HIDE INT LX EGG WHPB 6-411 B100',
    fullName: '$18.85',
    address: 'GPQ',
    email: 'N',
    phone: 'NOT FOUND',
    signUpDate: '$25.75'
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
  selector: 'app-thd-prospects',
  templateUrl: './thd-prospects.component.html',
  styleUrls: ['./thd-prospects.component.scss'],
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
export class ThdProspectsComponent implements OnInit {
  currentWindowWidth: number;
  currentIndex: number = null;
  // fake combobox values and auto-complete for demo
  searchTermOne = '';
  searchTermTwo = '';
  dropdownValues1 = ['a', 'b', 'c', 'd'];
  dropdownValues2 = ['a', 'b', 'c', 'd'];

  expandedData: any;
  displayedColumns = ['proXtraID', 'fullName', 'phone'];
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
