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
        this.recipes = response;
      });
  }

  AddRecipe(recipe) {
    this.recipes.push(recipe);
  }
}
