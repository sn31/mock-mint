import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "../authentication.service";
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [AuthenticationService] 
})
export class NavbarComponent implements OnInit {
  navbarOpen = false;

  toggleNavBar()
  {
    this.navbarOpen = !this.navbarOpen;
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

  login() {
    this.authService.login();
  }
  logout() {
    this.authService.logout();
  }

  ngOnInit() {
  }

}
