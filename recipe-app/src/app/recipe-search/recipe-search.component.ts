import { Component, OnInit } from '@angular/core';
import { SpoonacularService } from '../spoonacular.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-recipe-search',
    templateUrl: './recipe-search.component.html',
    styleUrls: ['./recipe-search.component.css']
})
export class RecipeSearchComponent implements OnInit {
    selectedRecipe: string = ''; // Store the selected recipe ID
    recipes: any[] = []; // List of recipes
    query: string = ''; // Search query

    constructor(
        private spoonacularService: SpoonacularService,
        private router: Router
    ) {}

    ngOnInit() {
        // Fetch list of recipes (Replace this with actual data retrieval logic)
        this.recipes = [
    { id: '1', title: 'Chicken Biryani' },
    { id: '2', title: 'Spaghetti Carbonara' },
    { id: '3', title: 'Mushroom Risotto' },
    { id: '4', title: 'Beef Tacos' },
    { id: '5', title: 'Vegetable Stir-Fry' },
    { id: '6', title: 'Margherita Pizza' },
    { id: '7', title: 'Grilled Salmon' },
    { id: '8', title: 'Chicken Caesar Salad' },
    { id: '9', title: 'Beef Stew' },
    { id: '10', title: 'Pancakes' },
    { id: '11', title: 'Chicken Curry' },
    { id: '12', title: 'Chocolate Cake' },
    { id: '13', title: 'Caprese Salad' },
    { id: '14', title: 'Vegetable Soup' },
    { id: '15', title: 'Pulled Pork Sandwiches' },
    { id: '16', title: 'Shrimp Scampi' },
    { id: '17', title: 'Beef Burger' },
    { id: '18', title: 'Ratatouille' },
    { id: '19', title: 'Fried Rice' },
    { id: '20', title: 'Tiramisu' }
        ];
    }

    searchRecipes() {
        // Implement search functionality here if needed
        // For now, let's just redirect to the selected recipe's detail page
        this.redirectToRecipe();
    }

    redirectToRecipe() {
        if (this.selectedRecipe) {
            // Redirect to the detail page of the selected recipe
            this.router.navigate(['/recipes', this.selectedRecipe]);
        }
    }
}
