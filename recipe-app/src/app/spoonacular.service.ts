// import { recipes } from 'src/app/recipe-list/recipe';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Recipe } from '../app/recipe-list/recipe'; // Make sure to import the Recipe interface
import { recipes } from '../app/recipe-list/recipe'; // Adjust the path to the recipes file
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpoonacularService {
  constructor(private http: HttpClient) {}

  getRecipes(): Observable<any> {
    return this.http.get('assets/recipes.json');
  }
}
