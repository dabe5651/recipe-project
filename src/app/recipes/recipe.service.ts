import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
    new Recipe('Da Ganja Chicken Stew', 'This is simply a test', 'http://lorempixel.com/output/food-q-c-640-480-1.jpg', 
    [
        new Ingredient('Ganja', 1),
        new Ingredient('Chicken', 1),
        new Ingredient('Water', 35)
    ]),
    new Recipe('Hamburga Mon', 'This is simply a test', 'http://lorempixel.com/output/food-q-c-640-480-9.jpg', 
    [
        new Ingredient('Meat', 1),
        new Ingredient('Bun', 2)
    ])
  ];

    constructor(private slService: ShoppingListService) {

    }

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngToShop(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }

}