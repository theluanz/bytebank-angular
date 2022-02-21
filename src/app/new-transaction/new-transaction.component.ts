import Transaction from '../models/transaction.model';
import { TransactionService } from './../../services/transaction.service';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-transaction',
  templateUrl: './new-transaction.component.html',
  styleUrls: ['./new-transaction.component.scss'],
})
export class NewTransaction {
  @Output() onTransaction = new EventEmitter<any>();
  value!: number;
  destiny!: number;

  transaction() {
    const newTransaction: Transaction = {
      value: this.value,
      destiny: this.destiny,
    };
    this.transactionService.addNewTransaction(newTransaction).subscribe(
      (result) => {
        console.log(result);
        this.cleanForm();
      },
      (error) => console.log(error)
    );
  }

  cleanForm() {
    this.value = 0;
    this.destiny = 0;
  }
  /**
   *
   */
  constructor(private transactionService: TransactionService) {}
}
