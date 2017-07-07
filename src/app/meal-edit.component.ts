import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit',
  template: `
    <div *ngIf="childSelectedMeal">
      <h1>Change the meal</h1>
      <div>
        <label>Details of the meal</label>
        <input class="form-control" [(ngModel)]="childSelectedMeal.description">
        <label>Add your calories amount</label>
        <input class="form-control" [(ngModel)]="childSelectedMeal.calories">
        <button class="btn btn-info"(click)="doneClicked()">Done</button>
      </div>

    </div>
  `
})

export class EditMealComponent {
  @Input() childSelectedMeal: Meal;
  @Output() doneClickedSender = new EventEmitter();
  doneClicked() {
    this.doneClickedSender.emit();
  }
}
