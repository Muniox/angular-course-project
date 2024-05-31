import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css',
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;

  constructor(private shoppinListService: ShoppingListService) {}

  ngOnInit(): void {
    const subscription = this.shoppinListService.startedEditing.subscribe(
      (index: number) => {
        this.editedItemIndex = index;
        this.editMode = true;
      }
    );
  }

  onAddItem(form: NgForm) {
    const value = form.value;
    this.shoppinListService.addIngredient(
      new Ingredient(value.name, value.amount)
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
