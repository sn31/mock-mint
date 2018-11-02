import { Pipe, PipeTransform } from '@angular/core';
import { Transaction } from '../models/transation-model';

@Pipe({
  name: "price",
  pure: false //stateful
})
export class Price implements PipeTransform {
  transform(input: Transaction[], sortDirection) {
   
      input.sort(function(a: Transaction, b: Transaction) {
        if (sortDirection === "ascending") {
            if (a.amount < b.amount) return -1;
            else if (a.amount > b.amount) return 1;
            else return 0;
        }
        else if (sortDirection === "descending") {
          if (a.amount > b.amount) return -1;
          else if (a.amount < b.amount) return 1;
          else return 0;
        }
    });
      return input;
  }
}