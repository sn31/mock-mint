import { Injectable } from '@angular/core';
import { Transaction } from '../app/models/transation-model';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

@Injectable()
export class TransactionService {
  transactions: FirebaseListObservable<any[]>;
  constructor(private database: AngularFireDatabase) {
    this.transactions = database.list('transactions');
   }
  getTransactions() {
    return this.transactions;
  }
  addTransactions(newTransaction: Transaction) {
    this.transactions.push(newTransaction);
  }
  getTransactionById(transactionId: string){
    return this.database.object('transactions/');
  }
}