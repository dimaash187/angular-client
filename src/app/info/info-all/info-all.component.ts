import { Component, OnInit } from '@angular/core';
import { InfoService } from '../../info.service';


@Component({
  selector: 'app-info-all',
  template: `
    <div class="card" *ngFor="let item of info | async">
      {{ item }} 
    </div>
  `,
  styles: [
  ]
})
export class InfoAllComponent implements OnInit {
  info;
  constructor(private infoService: InfoService) { }

  ngOnInit(): void {
  // this.infoService.getInfo()
  //   .subscribe(info => {
  //     console.log(info);
  //   });
    this.info = this.infoService.getInfo();
  }

}
