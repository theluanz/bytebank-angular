import { Component } from '@angular/core';

@Component({
  selector: 'app-new-transaction',
  templateUrl: './new-transaction.component.html',
  styleUrls: ['./new-transaction.component.scss'],
})
export class NewTransaction {
  public value!: Number;
  public destiny!: Number;

  constructor() {}
  transaction() {
    console.log(this.value);
    console.log(this.destiny);
  }
}
