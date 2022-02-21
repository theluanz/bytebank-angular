import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Transaction from 'src/app/models/transaction.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  private transactionList: Transaction[];
  private url = 'http://localhost:3000/transactions';

  constructor(private httpClient: HttpClient) {
    this.transactionList = [];
  }

  get transactions() {
    return this.transactionList;
  }

  getAllTransactions(): Observable<Transaction[]> {
    return this.httpClient.get<Transaction[]>(this.url);
  }

  addNewTransaction(transfer: Transaction): Observable<Transaction> {
    this.hydrateData(transfer);
    return this.httpClient.post<Transaction>(this.url, transfer);
  }
  private hydrateData(transfer: any) {
    transfer.date = new Date();
  }
}
