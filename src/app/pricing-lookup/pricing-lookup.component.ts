import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Observable, of } from 'rxjs';
import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';

export interface Data {
  itemId: string;
  itemDescription: string;
  currentPrice: string;
  priceSource: string;
  final: string;
  mgplPrice: string;
  matrixPrice: string;
}

const data: Data[] = [
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

/**
 * Data source to provide what data should be rendered in the table. The observable provided
 * in connect should emit exactly the data that should be rendered by the table. If the data is
 * altered, the observable should emit that new set of data on the stream. In our case here,
 * we return a stream that contains only one set of data that doesn't change.
 */
export class MobileDataSource extends DataSource<any> {
  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Data[]> {
    const rows = [];
    data.forEach(data => rows.push(data, { detailRow: true, data }));
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
  expandedData: any;
  displayedColumns = ['itemId', 'currentPrice', 'priceSource'];
  dataSource = new MobileDataSource();

  isExpansionDetailRow = (i: number, row: object) =>
    row.hasOwnProperty('detailRow');

  constructor() {}

  ngOnInit() {}
}
