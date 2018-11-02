import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "../services/authentication.service";
import { Router, Routes, RouterModule } from '@angular/router';

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

  constructor(public authService: AuthenticationService, private router: Router){
    this.authService.user.subscribe(user=>{
      if (user === null){
        this.isLoggedIn = false;
        this.router.navigate(['']);
      }
      else {
        this.isLoggedIn = true;
        this.userName = user.displayName;
        this.router.navigate(['private']);
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
