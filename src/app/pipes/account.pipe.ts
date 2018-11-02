import { Pipe } from "@angular/core";
import { Transaction } from "../models/transation-model";

@Pipe({
  name: "accountpipe",
  pure: false //stateful
})
export class AccountPipe{
  output: Transaction[];
  transform(input: Transaction[], accountName) {
    if ((accountName = null)) {
      return input;
    } else {
      input.forEach(element => {
        if (element.account === accountName) {
          this.output.push(element);
        }
      });
      return this.output;
    }
    
  }
}
