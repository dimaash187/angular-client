import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-contact',
  template: `
    <section class="hero is-primary is-bold">
    <div class="hero-body">
    <div class="container">

      <h1 class="title">Calculate Factorial</h1>
        <!-- form goes here -->
        <form (ngSubmit)="processForm()" #form1="ngForm">

          <!-- argument -->
          <div class="field">
            <input 
              type="text" 
              name="argument" 
              class="input" 
              placeholder="N argument" 
              [(ngModel)]="argument"
              required
              minlength="1"
              maxlength="3"
              #nameInput="ngModel"              
              [ngModelOptions]="{ updateOn: 'blur' }"
              pattern="^[0-9]+$"
              >
              <div class="tile is-error" *ngIf="nameInput.invalid && nameInput.dirty">
                N Argument is required and needs to be at least 1 characters long and at most 3 characters long.
              </div>              
          </div>

          <div class="tile notification is-success">
            <!-- The magical tile element! -->
             <p class="is-size-2 has-text-weight-medium">Result: {{ data }}</p> <br />
          </div>          

          <button type="submit" class="button is-danger is-large" [ngClass]="isLoading ? 'is-loading' : 'raised'" [disabled]="!form1.form.valid">GO</button>
          <br />
        </form>
    </div>
    </div>
    </section>
  `,
  styles: [
  ]
})
export class ContactComponent implements OnInit {
  argument: string;
  data: any;
  isLoading: boolean;

  constructor(private apiService: ApiService) {

    this.argument = "1";
   }

  ngOnInit(): void {
    this.isLoading = false;
  }

  /**
   * Process the form we have. Send to whatever backend
   * Only alerting for now
   */
  processForm() {
    console.log("processForm");
   
    this.isLoading = true;
    this.apiService.getFactorial(parseInt(this.argument))
        .subscribe(
          res => {
            console.log(res)
            this.data = res;
            this.isLoading = false;

            this.apiService.hitCounter()
              .subscribe(
                res2 => {
                    console.log(res2)
                    this.apiService.raiseEvent(this.data);
                  },
                  err => {
                    console.log('err');
                    console.log(err);
                  }
              );                 
            },
            err => {
              this.isLoading = false;
              console.log('err');
              console.log(err);
            }
        );    
 }  

}
