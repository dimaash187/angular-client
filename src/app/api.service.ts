import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl1 = 'http://localhost:8081/info';
  apiUrl2 = 'http://localhost:8081/factorial';
  apiUrl3 = 'http://localhost:8081/hit-counter';

  messageFilter: EventEmitter<number>;
  constructor(private http: HttpClient) {
    this.messageFilter = new EventEmitter<number>();
  }

  getInfo() {
    return this.http.get(`${this.apiUrl1}`);
  }
  
  getFactorial(narg) {
    console.log("===> ApiService.getFactorial <===")
    console.log(`narg = ${narg}`)
    return this.http.get(`${this.apiUrl2}/${narg}`);
  }

  hitCounter() {
    console.log("===> ApiService.hitCounter <===")
    return this.http.put(`${this.apiUrl3}`, {});
  }

  raiseEvent(id: number): void {
    this.messageFilter.emit(id);
  }
}
