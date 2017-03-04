import { Component, OnInit } from '@angular/core';
import * as SocialShare from 'nativescript-social-share';
import * as timer from 'timer';

@Component({
  selector: 'app-list',
  templateUrl: 'pages/list/list.html',
  styleUrls: ['pages/list/list-common.css', 'pages/list/list.css']
})
export class ListComponent implements OnInit {
  groceryList: Array<any> = [];
  grocery: string;
  isLoading = false;
  listLoaded = false;

  ngOnInit() {
    this.isLoading = true;
    timer.setTimeout(() => {
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

  share() {
    const list = [];
    const size = this.groceryList.length;
    for (let i = 0; i < size; i++) {
      list.push(this.groceryList[i].name);
    }
    const listString = list.join(', ').trim();
    SocialShare.shareText(listString);
  }
}
