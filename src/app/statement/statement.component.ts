import { TransactionService } from './../../services/transaction.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-statement',
  templateUrl: './statement.component.html',
  styleUrls: ['./statement.component.scss'],
})
export class StatementComponent implements OnInit {
  transfers: any;

  constructor(private service: TransactionService) {}

  ngOnInit(): void {
    this.transfers = this.service.transactions;
  }
}
