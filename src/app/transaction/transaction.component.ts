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
  transactionsObj: Transaction[] = [];
  constructor(private router: Router, private transactionService: TransactionService) {}
  ngOnInit() {
    this.transactions= this.transactionService.getTransactions();
    this.transactions.forEach(element => {
      element.forEach(subElement=>{
        this.transactionsObj.push(new Transaction(subElement["Account"], subElement["Amount"],subElement["Category"], subElement["Date"],subElement["Description"], subElement["Type"]));
      })
    });
    console.log(this.transactionsObj);
  }
  

  goToDetailPage(clickedTransaction) {
    this.router.navigate(['transactions', clickedTransaction.$key]);
  };

}


 
