import { Component, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'my-meal',
  template: `
  <div class="container">
    <h1>Tod add your meal, fill the form below</h1>
    <div>
    <!--Input fields each with its local variable to collect info from the user  -->
      <label>Please enter the name of your meal</label><br>
      <input class="form-control" #userName><br>
      <br>
      <label>Please enter the details of your meal</label><br>
      <input class="form-control" #userDescription><br>
      <br>
      <label>Please enter the amount of calories</label><br>
      <input class="form-control" #userCalories><br>
    </div>
    <div>
    <br>
    <!--Add button that collects data from the inputs using the local variables of the inputs  -->
      <button (click)="
        addClicked(userName.value, userDescription.value, userCalories.value);
        userName.value='';
        userDescription.value='';
        userCalories.value='';
      ">Add</button>
    </div>
    </div>
  `
})
// Exporting the child new meal component class
export class NewMealComponent {
  @Output() newMealSender = new EventEmitter();
  addClicked(name: string, description: string, calories : number) {
    var newMealToAdd: Meal = new Meal(name, description, calories)
    this.newMealSender.emit(newMealToAdd);
  }
}
