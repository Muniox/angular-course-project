import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://glutenfreecuppatea.co.uk/wp-content/uploads/2022/01/gluten-free-smoky-paprika-chicken-recipe-2.jpg'
    ),
    new Recipe(
      'Another Test Recipe',
      'This is another simply a test',
      'https://glutenfreecuppatea.co.uk/wp-content/uploads/2022/01/gluten-free-smoky-paprika-chicken-recipe-2.jpg'
    ),
  ];

  constructor() {}

  getRecipes() {
    return [...this.recipes];
  }
}
