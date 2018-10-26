import { Component, Output} from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @Output() clickSender = new EventEmitter();
  constructor() { }

  loginButtonClicked(){
    this.clickSender.emit("");
  }
}
