import { Injectable } from '@angular/core';

@Injectable()
export class LogService {

  constructor() {
    console.log('-----日志服务启动-------');
  }

  log(str: string) {
    console.log(str);
  }

  setItem(key: string, value: string) {
    localStorage.setItem(key, value);
  }
  getItem(key: string) {
    localStorage.getItem(key);

  }
  removeItem(key: string) {
    localStorage.removeItem(key);
  }
  clear() {
    localStorage.clear();
  }
}
