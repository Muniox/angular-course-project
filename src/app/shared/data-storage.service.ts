import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {RecipeService} from "../recipes/recipe.service";
import {Recipe} from "../recipes/recipe.model";

@Injectable({
  providedIn: "root",
})
export class DataStorageService {
  URL = import.meta.env.NG_APP_URL;

  constructor(
    private http: HttpClient,
    private recipeService: RecipeService
  ) {}

  storeRecipes() {
    console.log(this.URL)
    const recipes = this.recipeService.getRecipes();
    this.http.put(this.URL + 'recipes.json', recipes)
      .subscribe((response) => {
        console.log(response);
    });
  }

  fetchRecipes() {
    this.http.get<Recipe[]>(this.URL + 'recipes.json')
      .subscribe((recipes) => {
      this.recipeService.setRecipes(recipes)
    })
  }

}
