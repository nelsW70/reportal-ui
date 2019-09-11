import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inventory-lookup',
  templateUrl: './inventory-lookup.component.html',
  styleUrls: ['./inventory-lookup.component.scss']
})
export class InventoryLookupComponent implements OnInit {
  // fake combobox values and auto-complete for demo
  searchTermOne = '';
  dropdownValues1 = ['a', 'b', 'c', 'd'];

  // fake values for semantic ui select
  selectedOption = [];
  options: Array<string> = ['one', 'two', 'three', 'four', 'five'];

  selectedOption2 = [];
  options2: Array<string> = ['one', 'two', 'three', 'four', 'five'];

  constructor() {}

  ngOnInit() {}
}
