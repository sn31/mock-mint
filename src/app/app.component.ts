import { Component } from '@angular/core';
import {Panel} from './models/panel-model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mint';
  masterPanelList: Panel[] = [
    new Panel('Effortlessly stay on top of bills','At last, your bills and money are together in one place and easier than ever to track. Just add your bills to see how helpful we can be.','../assets/img/panel-pic.png'),
    new Panel('Personalized for you','Create budgets that make sense today and set you up for success tomorrow See bills and money together, so you know what’s due, when it’s due and what you can pay. Receive alerts for unusual account charges, and get custom tips for reducing fees and saving money.Get your free credit score and learn how you can improve it now to get the things you want later.','../assets/img/panel-pic2.png'),
    new Panel('Get started simply & securely','It’s easy to set up your free account in seconds, and help’s available if you should ever need it.We work to keep your information secure. All your data is encrypted with a 256-bit encryption level and the data exchanged with Mint is encrypted with 128-bit SSL.Mint comes from the makers of TurboTax®, trusted by millions every year with their most sensitive data.','../assets/img/panel-pic3.jpg')
  ];
 
}
