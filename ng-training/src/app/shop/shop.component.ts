import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { LogService } from '../service/log.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  private title;
  private list;
  constructor(private http: Http, log: LogService) {
    log.log('---------发起http请求---------');
    // this.request();
  }

  ngOnInit() {
  }
  request() {
    return this.http.get('http://localhost:4000')
      .map(res => res.json())
      .subscribe(data => {
        this.title = data.title;
        this.list = data.subjects;
        console.log(data);
      });
  }
}
