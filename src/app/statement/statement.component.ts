import { TransactionService } from './../../services/transaction.service';
import { Component, Input, OnInit } from '@angular/core';
import Transaction from '../models/transaction.model';

@Component({
  selector: 'app-statement',
  templateUrl: './statement.component.html',
  styleUrls: ['./statement.component.scss'],
})
export class StatementComponent implements OnInit {
  transfers: any;

  constructor(private transactionService: TransactionService) {}

  ngOnInit(): void {
    this.transactionService
      .getAllTransactions()
      .subscribe((transfers: Transaction[]) => {
        console.table(transfers);
        this.transfers = transfers;
      });
  }
}
