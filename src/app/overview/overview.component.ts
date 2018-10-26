import { Component, OnInit } from '@angular/core';
import {Account} from '../models/account-model';
@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
   
  }
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  
  newAccount = new Account(
    10000,10000,-40000,135000,35000
  )
}
