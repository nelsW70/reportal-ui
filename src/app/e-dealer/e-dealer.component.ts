import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-e-dealer',
  templateUrl: './e-dealer.component.html',
  styleUrls: ['./e-dealer.component.scss']
})
export class EDealerComponent implements OnInit {
  // fake combobox values and auto-complete for demo
  searchTermOne = '';
  searchTermTwo = '';
  dropdownValues1 = ['a', 'b', 'c', 'd'];
  dropdownValues2 = ['a', 'b', 'c', 'd'];

  // fake values for semantic ui select
  selectedOption = [];
  options: Array<string> = ['one', 'two', 'three', 'four', 'five'];

  constructor() {}

  ngOnInit() {}
}
