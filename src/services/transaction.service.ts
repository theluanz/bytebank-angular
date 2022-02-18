import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  private transactionList: any[];

  constructor() {
    this.transactionList = [];
  }
  get transactions() {
    return this.transactionList;
  }

  addNewTransaction(transfer: any) {
    this.hydrateData(transfer);
    this.transactionList.push(transfer);
  }
  private hydrateData(transfer: any) {
    transfer.date = new Date();
  }
}
