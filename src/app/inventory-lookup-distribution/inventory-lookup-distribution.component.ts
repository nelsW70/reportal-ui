import { Component, OnInit, HostListener } from '@angular/core';
export interface ProductInfo {
  itemNumber: string;
  storeName: string;
  itemCount: string;
}

const data: ProductInfo[] = [
  {
    itemNumber: '',
    storeName: 'Riverside',
    itemCount: '2536'
  },
  {
    itemNumber: '',
    storeName: 'Reading',
    itemCount: '0'
  },
  {
    itemNumber: '',
    storeName: 'Oakwood',
    itemCount: '3652'
  },
  {
    itemNumber: '',
    storeName: 'McCarran',
    itemCount: '0'
  },
  {
    itemNumber: '',
    storeName: 'Lewisville',
    itemCount: '0'
  },
  {
    itemNumber: '',
    storeName: 'Aurora',
    itemCount: '3544'
  },
  {
    itemNumber: '',
    storeName: 'Houston',
    itemCount: '0'
  },
  {
    itemNumber: '',
    storeName: 'Fairburn',
    itemCount: '2312'
  },
  {
    itemNumber: '',
    storeName: 'Flower Mound',
    itemCount: '7496'
  }
];

@Component({
  selector: 'app-inventory-lookup-distribution',
  templateUrl: './inventory-lookup-distribution.component.html',
  styleUrls: ['./inventory-lookup-distribution.component.scss']
})
export class InventoryLookupDistributionComponent implements OnInit {
  currentWindowWidth: number;

  displayedColumns = ['storeName', 'itemNumber'];
  dataSource = data;

  constructor() {}

  ngOnInit() {
    this.currentWindowWidth = window.innerWidth;
  }

  @HostListener('window:resize')
  onResize() {
    this.currentWindowWidth = window.innerWidth;
  }
}
