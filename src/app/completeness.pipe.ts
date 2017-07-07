import {Pipe, PipeTransform} from '@angular/core';
import {Meal} from './meal.model';

@Pipe({
  name: "completeness",
  pure: false
})
export class CompletenessPipe implements PipeTransform {
  transform(input: Meal[], Calories) {
    var output: Meal[] = [];
    var cal: Meal [] = [];
    if(Calories < 500) {
      for (var i = 0; i < input.length; i++) {
        if (input[i].calories < 500) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (Calories > 500 ) {
      for (var i = 0; i < input.length; i++) {
        if (input[i].calories > 500) {
          cal.push(input[i]);
        }
      }
      return cal;
    } else {
      return input;
    }
  }
}
