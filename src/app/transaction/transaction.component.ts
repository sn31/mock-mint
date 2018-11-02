import { Component, OnInit } from '@angular/core';
import { Transaction } from '../models/transation-model';
import { Router } from '@angular/router';
import { TransactionService } from '../services/transaction.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css'],
  providers: [TransactionService]
})
export class TransactionComponent implements OnInit {

  transactions: FirebaseListObservable<any[]>;
  constructor(private router: Router, private transactionService: TransactionService) {}
  ngOnInit() {
    this.transactions= this.transactionService.getTransactions();
  }

  goToDetailPage(clickedTransaction) {
    this.router.navigate(['transactions', clickedTransaction.$key]);
  };

}


 
