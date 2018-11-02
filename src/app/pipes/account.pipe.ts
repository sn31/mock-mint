import { Pipe, PipeTransform } from "@angular/core";
import { Transaction } from "../models/transation-model";

@Pipe({
  name: "accountpipe",
  pure: false //stateful
})
export class AccountPipe implements PipeTransform {
  output: Transaction[];
  transform(input: Transaction[], accountName) {
    if ((accountName = '')) {
      this.output = input;
    } else {
      input.forEach(element => {
        if (element.account === accountName) {
          this.output.push(element);
        }
      });
    }
    return this.output;
  }
}
