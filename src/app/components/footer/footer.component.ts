import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="footer">
        <div class="content has-text-centered">
          <p>
            hitcount: {{ info.hitcount }},
            <strong>{{ info.version }}</strong> by <a href="javascript:void(0)">Dmitry Kuznetsov</a>.
          </p>
        </div>
      </footer>
  `,
  styles: [
  ]
})
export class FooterComponent implements OnInit {
  info: any;
  update: number;
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {

    // SUBSCRIBE TO API SERVICE EVENTS
    this.apiService.messageFilter.subscribe((param: number) => {
      console.log("===> apiService.messageFilter.subscribe@FooterComponent <===")
      
      // LETS RE-FETCH API INFO
      this.info = this.apiService.getInfo()
          .subscribe(
            res => {
              console.log(res)
              this.info = res;
              },
            err => {
                this.info = null;
                console.log('err');
                console.log(err);
              }
          )

    });

    this.info = this.apiService.getInfo()
        .subscribe(
          res => {
            console.log(res)
            this.info = res;
            },
          err => {
              this.info = null;
              console.log('err');
              console.log(err);
            }
        )
  }

}
