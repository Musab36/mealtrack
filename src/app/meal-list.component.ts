import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';


@Component({
  selector: 'list',
  template: `
  <div class="container">
  <!-- Option tags with maximum amount of 10000 calories -->
  <select (change)="onChange($event.target.value)">
  <option value="10000">Show All</option>
    <option value="500">Food with low calories</option>
    <option value="500">Food with high calories</option>
</select>
    <div *ngFor="let currentMeal of childMealList | completeness:selectedCalories">
    <h2>The name of the meal:<br>{{ currentMeal.name }}</h2>
      <p>Details of the meal :<br>{{currentMeal.description}}</p>
      <p> Amount of calories:<br>{{currentMeal.calories}}</p>
      <button class (click)="editButton(currentMeal)">Edit</button>
      </div>
      </div>
  `
})

export class MealListComponent {
  @Input() childMealList: Meal[];
  @Output() clickSender = new EventEmitter();
  public selectedCalories: number = 500;
onChange(optionFromMenu) {
  this.selectedCalories = optionFromMenu;
  console.log(this.selectedCalories);
}
  editButton(mealToEdit: Meal) {
    this.clickSender.emit(mealToEdit);
  }
}
