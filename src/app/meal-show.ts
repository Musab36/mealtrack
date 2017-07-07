import { Component, Input } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'show-meal',
  template: `
  <div>
    <input *ngIf="meal.calories < 500" type="checkbox" checked (click)="toggleDone(500)"/>
    <input *ngIf="meal.calories > 500" type="checkbox" (click)="toggleDone(500)"/>
    <label>{{ task.description }}</label>
  </div>
  `
})
export class MealComponent {
  @Input() meal: Meal;
  toggleDone(setCompleteness: number) {
    this.meal.calories = setCompleteness;
  }
}
