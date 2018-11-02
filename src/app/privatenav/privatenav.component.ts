import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "../services/authentication.service";
import {Section} from "../models/privatenav-model";
@Component({
  selector: 'app-privatenav',
  templateUrl: './privatenav.component.html',
  styleUrls: ['./privatenav.component.css'],
  providers: [AuthenticationService] 
})
export class PrivatenavComponent implements OnInit {

  ngOnInit() {
  }
  user;
  private isLoggedIn: Boolean;
  private userName: String;

  constructor(public authService: AuthenticationService){
    this.authService.user.subscribe(user=>{
      if (user === null){
        this.isLoggedIn = false;
      }
      else {
        this.isLoggedIn = true;
        this.userName = user.displayName;
      }
    });
  }
  logout() {
    this.authService.logout();
  }
  sections: Section[] = [
    new Section('add accounts',''),
    new Section('settings',''),
    new Section('profile',''),
    new Section('tour','')
  ];
  subsections: Section[] = [
    new Section('overview','overview'),
    new Section('transactions','transactions'),
    new Section('credit score','credits'),
    new Section('bills','bills'),
    new Section('budgets','budgets'),
    new Section('goals','goals'),
    new Section('trends','trends'),
    new Section('investments','investments'),
    new Section('ways to save','savings'),
  ];
}
