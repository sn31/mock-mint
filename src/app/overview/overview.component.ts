import { Component, OnInit,AfterViewInit  } from '@angular/core';
import {Account} from '../models/account-model';
import { TransactionService } from '../services/transaction.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
  providers: [TransactionService]
})
export class OverviewComponent implements OnInit, AfterViewInit{
  chart =[];
  transactions: FirebaseListObservable<any[]>;
  amountArr: number[] = [];

  constructor( private transactionService: TransactionService) {}
  ngOnInit() {
    this.transactions= this.transactionService.getTransactions();
    this.transactions.forEach(element => {
      element.forEach(subElement=>{
        this.amountArr.push(subElement["Amount"]);
      })
    });
  }

  ngAfterViewInit(){
    this.chart = (new Chart('canvas', {
      type: 'line',
      data: [1,2,4,61,1,2,4,56,2,13,2,1,2]
    }));
  }

  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  
  newAccount = new Account(
    '100000','10000','-40000','135000','35000'
  )
  
}
