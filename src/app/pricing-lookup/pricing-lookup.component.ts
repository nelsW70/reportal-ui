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
  displayedColumns = ['itemId', 'name', 'weight'];
  dataSource = new ExampleDataSource();

  isExpansionDetailRow = (i: number, row: object) =>
    row.hasOwnProperty('detailRow');

  constructor() {}

  ngOnInit() {}
}

export interface Data {
  itemId: string;
  itemDescription: string;
  currentPrice?: string;
  priceSource?: string;
  final?: string;
  mgplPrice?: string;
  matrixPrice?: string;

  // change
  name?: string;
  // change
  weight?: number;
  // change
  symbol?: string;
}

const data: Data[] = [
  {
    itemId: '6-411/01',
    itemDescription: 'S-Hide INT LX EGG WHPB 6-411 B100',
    currentPrice: '$18.85',
    name: 'Hydrogen',
    weight: 1.0079,
    symbol: 'H'
  },
  {
    itemId: 'AK2LV-B/55',
    itemDescription: 'AMERLOCK 2 LV CUBE',
    currentPrice: '$18.85',
    name: 'Helium',
    weight: 4.0026,
    symbol: 'He'
  },
  {
    itemId: 'AK2-T1/01',
    itemDescription: 'AMERLOCK 2/400 DEEP TINT RESIN',
    currentPrice: '$18.85',
    name: 'Lithium',
    weight: 6.941,
    symbol: 'Li'
  },
  {
    itemId: '6-411/01',
    itemDescription: 'S-HIDE INT LX EGG WHPB 6-411 B100',
    currentPrice: '$18.85',
    name: 'Beryllium',
    weight: 9.0122,
    symbol: 'Be'
  },
  {
    itemId: '6-411/01',
    itemDescription: 'S-HIDE INT LX EGG WHPB 6-411 B100',
    currentPrice: '$18.85',
    name: 'Boron',
    weight: 10.811,
    symbol: 'B'
  },
  {
    itemId: '6-411/01',
    itemDescription: 'S-HIDE INT LX EGG WHPB 6-411 B100',
    currentPrice: 'NOT FOUND',
    name: 'Carbon',
    weight: 12.0107,
    symbol: 'C'
  },
  {
    itemId: '6-411/01',
    itemDescription: 'S-HIDE INT LX EGG WHPB 6-411 B100',
    currentPrice: '$18.85',
    name: 'Nitrogen',
    weight: 14.0067,
    symbol: 'N'
  },
  {
    itemId: '6-411/01',
    itemDescription: 'S-HIDE INT LX EGG WHPB 6-411 B100',
    currentPrice: '$18.85',
    name: 'Oxygen',
    weight: 15.9994,
    symbol: 'O'
  },
  {
    itemId: 'AK2LV-B/55',
    itemDescription: 'S-HIDE INT LX EGG WHPB 6-411 B100',
    currentPrice: '$18.85',
    name: 'Fluorine',
    weight: 18.9984,
    symbol: 'F'
  },
  {
    itemId: 'AK2LV-B/55',
    itemDescription: 'S-HIDE INT LX EGG WHPB 6-411 B100',
    currentPrice: '$18.85',
    name: 'Neon',
    weight: 20.1797,
    symbol: 'Ne'
  }
];

/**
 * Data source to provide what data should be rendered in the table. The observable provided
 * in connect should emit exactly the data that should be rendered by the table. If the data is
 * altered, the observable should emit that new set of data on the stream. In our case here,
 * we return a stream that contains only one set of data that doesn't change.
 */
export class ExampleDataSource extends DataSource<any> {
  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Data[]> {
    const rows = [];
    data.forEach(data => rows.push(data, { detailRow: true, data }));
    console.log(rows);
    return of(rows);
  }

  disconnect() {}
}
