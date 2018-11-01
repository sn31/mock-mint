import { Component } from "@angular/core";
import { AuthenticationService } from "./authentication.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [AuthenticationService] 
})
export class AppComponent {
  title = "Mint";
  user;
  private isLoggedIn: Boolean;

  constructor(public authService: AuthenticationService){
    this.authService.user.subscribe(user=>{
      if (user === null)
      {
        this.isLoggedIn = true;
      }
      else {this.isLoggedIn = false};
    })
  }
}
