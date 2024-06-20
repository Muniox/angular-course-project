import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipes/recipe.model';
import {map, tap} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  URL =
    'https://ng-course-recipe-book-711ea-default-rtdb.europe-west1.firebasedatabase.app/';

  constructor(
    private http: HttpClient,
    private recipeService: RecipeService,
  ) {}

  storeRecipes() {
    console.log(this.URL);
    const recipes = this.recipeService.getRecipes();
    this.http.put(this.URL + 'recipes.json', recipes).subscribe((response) => {
      console.log(response);
    });
  }

  fetchRecipes() {

    return this.http.get<Recipe[]>(this.URL + 'recipes.json').pipe(
      map((recipes) => {
        return recipes.map((recipes) => {
          return {
            ...recipes,
            ingredients: recipes.ingredients ? recipes.ingredients : [],
          };
        });
      }),
      tap((recipes) => {
        this.recipeService.setRecipes(recipes);
      })
    )
  }


}
