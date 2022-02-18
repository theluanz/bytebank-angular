import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-transaction',
  templateUrl: './new-transaction.component.html',
  styleUrls: ['./new-transaction.component.scss'],
})
export class NewTransaction {
  @Output() onTransaction = new EventEmitter<any>();
  value!: Number;
  destiny!: Number;

  transaction() {
    this.onTransaction.emit({ value: this.value, destiny: this.destiny });
    this.cleanForm();
  }

  cleanForm() {
    this.value = 0;
    this.destiny = 0;
  }
}
