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
  itemId: string;
  itemDescription: string;
  currentPrice: string;
  priceSource: string;
  final: string;
  mgplPrice: string;
  matrixPrice: string;
}

const data: ProductInfo[] = [
  {
    itemId: '6-411/01',
    itemDescription: 'S-Hide INT LX EGG WHPB 6-411 B100',
    currentPrice: '$18.85',
    priceSource: 'GPQ',
    final: 'N',
    mgplPrice: '$18.85',
    matrixPrice: '$25.75'
  },
  {
    itemId: 'AK2LV-B/55',
    itemDescription: 'AMERLOCK 2 LV CUBE',
    currentPrice: '$18.85',
    priceSource: 'GPQ',
    final: '-',
    mgplPrice: '$18.85',
    matrixPrice: '$25.75'
  },
  {
    itemId: 'AK2-T1/01',
    itemDescription: 'AMERLOCK 2/400 DEEP TINT RESIN',
    currentPrice: '$18.85',
    priceSource: '-',
    final: 'Y',
    mgplPrice: '-',
    matrixPrice: '$25.75'
  },
  {
    itemId: '6-411/01',
    itemDescription: 'S-HIDE INT LX EGG WHPB 6-411 B100',
    currentPrice: '$18.85',
    priceSource: 'GPQ',
    final: 'N',
    mgplPrice: '$18.85',
    matrixPrice: '$25.75'
  },
  {
    itemId: '6-411/01',
    itemDescription: 'S-HIDE INT LX EGG WHPB 6-411 B100',
    currentPrice: '$18.85',
    priceSource: 'MGPL',
    final: 'N',
    mgplPrice: '$18.85',
    matrixPrice: '$25.75'
  },
  {
    itemId: '6-411/01',
    itemDescription: 'S-HIDE INT LX EGG WHPB 6-411 B100',
    currentPrice: 'NOT FOUND',
    priceSource: 'GPQ',
    final: 'N',
    mgplPrice: 'NOT FOUND',
    matrixPrice: '$25.75'
  },
  {
    itemId: '6-411/01',
    itemDescription: 'S-HIDE INT LX EGG WHPB 6-411 B100',
    currentPrice: '$18.85',
    priceSource: '-',
    final: '-',
    mgplPrice: '$18.85',
    matrixPrice: '$25.75'
  },
  {
    itemId: '6-411/01',
    itemDescription: 'S-HIDE INT LX EGG WHPB 6-411 B100',
    currentPrice: '$18.85',
    priceSource: 'GPQ',
    final: 'Y',
    mgplPrice: '$18.85',
    matrixPrice: '$25.75'
  },
  {
    itemId: 'AK2LV-B/55',
    itemDescription: 'S-HIDE INT LX EGG WHPB 6-411 B100',
    currentPrice: '$18.85',
    priceSource: 'GPQ',
    final: 'N',
    mgplPrice: '$18.85',
    matrixPrice: 'NOT FOUND'
  },
  {
    itemId: 'AK2LV-B/55',
    itemDescription: 'S-HIDE INT LX EGG WHPB 6-411 B100',
    currentPrice: '$18.85',
    priceSource: 'GPQ',
    final: 'N',
    mgplPrice: 'NOT FOUND',
    matrixPrice: '$25.75'
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
  selector: 'app-pricing-lookup',
  templateUrl: './pricing-lookup.component.html',
  styleUrls: ['./pricing-lookup.component.scss'],
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
export class PricingLookupComponent implements OnInit {
  currentWindowWidth: number;
  currentIndex: number = null;
  // fake combobox values and auto-complete for demo
  searchTermOne = '';
  searchTermTwo = '';
  searchTermThree = '';
  dropdownValues1 = ['1234', '12345', '12456'];
  dropdownValues2 = ['Mickey Hotel', 'We Sell Paint', 'Bob Loves Paint'];
  dropdownValues3 = ['Value 1', 'Value 2', 'Value 3'];
  expandedData: any;
  displayedColumns = ['itemId', 'currentPrice', 'priceSource'];
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
