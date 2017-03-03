import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: 'pages/list/list.html',
  styleUrls: ['pages/list/list-common.css', 'pages/list/list.css']
})
export class ListComponent implements OnInit {
  groceryList: Array<Object> = [];
  grocery: string;
  isLoading = false;
  listLoaded = false;

  ngOnInit() {
    this.isLoading = true;
    setTimeout(() => {
      this.groceryList.push({ name: 'Apples' });
      this.groceryList.push({ name: 'Bananas' });
      this.groceryList.push({ name: 'Oranges' });
      this.isLoading = false;
      this.listLoaded = true;
    }, 500);

  }

  add() {
    this.groceryList.push({ name: this.grocery });
    this.grocery = '';
  }
}
