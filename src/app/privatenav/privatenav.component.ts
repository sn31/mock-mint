import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "../authentication.service";
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
}