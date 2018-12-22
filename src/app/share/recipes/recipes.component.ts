import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/internal/operators/map';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {

  constructor(public http: Http) { }
  recipes: Array<any>;
  ngOnInit() {
    this.getRecipes();
  }

  getRecipes() {
    this.http.get('http://localhost:3000/recipes').pipe(map(response => {
      return response.json();
    }))
      .subscribe(response => {
        this.recipes = response.reverse();
      });
  }

  AddRecipe(recipe) {
    this.recipes.unshift(recipe);
  }

  DeleteRecipe(id) {
    console.log(id);
    this.recipes.map((recipe, index) => {
      if (recipe.id === id) {
        this.recipes.splice(index, 1);
        this.http.delete(`http://localhost:3000/recipes/${recipe.id}`).subscribe();
      }
    });
  }
}
