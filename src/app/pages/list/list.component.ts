import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: 'pages/list/list.html',
  styleUrls: ['pages/list/list-common.css', 'pages/list/list.css']
})
export class ListComponent implements OnInit {
  groceryList: Array<Object> = [];
  grocery: string;

  ngOnInit() {
    this.groceryList.push({ name: 'Apples' });
    this.groceryList.push({ name: 'Bananas' });
    this.groceryList.push({ name: 'Oranges' });
  }

  add() {
    this.groceryList.push({name: this.grocery });
    this.grocery = '';
  }
}
