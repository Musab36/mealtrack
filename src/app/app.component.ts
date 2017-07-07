import { Component } from '@angular/core';
import { Meal } from './meal.model';
@Component({
  selector: 'my-app',
  template: `
  <div class = "container">
  <h1>Meal Tracker App</h1>
<!-- We are binding in the parent the child components selectors and attach events to them-->
  <my-meal
    (newMealSender)="addMeal($event)"
  ></my-meal>


  <list
  [childMealList]="masterMealList"
  (clickSender)="showDetails($event)"
 ></list>


 <edit
  [childSelectedMeal]="selectedMeal"
  (doneClickedSender)="finishedEditing()"
></edit>

  </div>
  `
})

export class AppComponent {
  public masterMealList: Meal[] = [

  ];

  addMeal(newMealToAdd: Meal) {
    this.masterMealList.push(newMealToAdd);
  }
  selectedMeal: Meal = null;
  showDetails(clickedMeal: Meal) {
    this.selectedMeal = clickedMeal;
  }
  finishedEditing() {
    this.selectedMeal = null;
  }
}
