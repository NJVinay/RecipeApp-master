import { Component, OnInit } from '@angular/core';
import { SpoonacularService } from '../spoonacular.service';
import  { recipes } from 'src/app/recipe-list/recipe';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
    recipes: any[] = [];

    constructor() {}

    ngOnInit(): void {
        this.recipes = recipes;
    }
}
