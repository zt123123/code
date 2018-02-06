import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { LogService } from './service/log.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private title;
  private list;
  private arr = ['🍍', '🍎', '🍏', '🍌', '🍑']
  private isShow = true;

  constructor(private http: Http, private log: LogService) {
    // this.request();
    console.log(...this.arr);
    
    log.log('app log ....');
  }

  ngOnInit() {
    console.log(`😍`);
  }
  add(val) {
    alert(val);
  }

}
