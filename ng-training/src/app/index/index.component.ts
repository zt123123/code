import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  private list = [];
  constructor() { }

  ngOnInit() {
  }

  handleClick(input, event) {
    if (input.value !== '') {
      this.list.push(input.value);
      input.value = '';
    }
  }
}
