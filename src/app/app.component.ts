import { TransactionService } from './../services/transaction.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bytebank';
  constructor(private transactionService: TransactionService) {}

  transaction($event: any) {
    this.transactionService.addNewTransaction($event);
  }
}
