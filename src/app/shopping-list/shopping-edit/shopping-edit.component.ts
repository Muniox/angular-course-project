import { Component, ElementRef, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css',
})
export class ShoppingEditComponent {
  constructor(private shoppinListService: ShoppingListService) {}

  onAddItem(form: NgForm) {
    const value = form.value;
    this.shoppinListService.addIngredient(
      new Ingredient(value.name, value.amount)
    );
  }
}
