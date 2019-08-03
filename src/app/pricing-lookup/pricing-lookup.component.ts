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
  name: string;
  itemId: string;
  weight: number;
  symbol: string;
}

const data: Data[] = [
  { itemId: '6-411/01', name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { itemId: 'AK2LV-B/55', name: 'Helium', weight: 4.0026, symbol: 'He' },
  { itemId: 'AK2-T1/01', name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { itemId: '6-411/01', name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { itemId: '6-411/01', name: 'Boron', weight: 10.811, symbol: 'B' },
  { itemId: '6-411/01', name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { itemId: '6-411/01', name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { itemId: '6-411/01', name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { itemId: 'AK2LV-B/55', name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { itemId: 'AK2LV-B/55', name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  { itemId: 'AK2LV-B/55', name: 'Sodium', weight: 22.9897, symbol: 'Na' },
  { itemId: 'AK2LV-B/55', name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
  { itemId: 'AK2LV-B/55', name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
  { itemId: 'AK2LV-B/55', name: 'Silicon', weight: 28.0855, symbol: 'Si' },
  { itemId: 'AK2LV-B/55', name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
  { itemId: 'AK2LV-B/55', name: 'Sulfur', weight: 32.065, symbol: 'S' },
  { itemId: 'AK2LV-B/55', name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
  { itemId: 'AK2LV-B/55', name: 'Argon', weight: 39.948, symbol: 'Ar' },
  { itemId: 'AK2LV-B/55', name: 'Potassium', weight: 39.0983, symbol: 'K' },
  { itemId: 'AK2LV-B/55', name: 'Calcium', weight: 40.078, symbol: 'Ca' }
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
