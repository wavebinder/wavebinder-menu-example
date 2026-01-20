import {Component, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {DishIngredient} from '../models/models';
import {ApiService} from '../services/api.service';

@Component({
  selector: 'app-ingredient-editor',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ingredient-editor-component.html'
})
export class IngredientEditorComponent {
  ingredients: DishIngredient[] = [];


  constructor(private api: ApiService) {
  }


  ngOnInit() {
    this.api.getDishIngredients().subscribe(data => {
      this.ingredients = data;


// 🔌 FLOW INIT
// data.forEach(i => flowEngine.registerNode(`ingredient:${i.id}`, i));
    });
  }


  update(i: DishIngredient) {
// 🔌 FLOW UPDATE
// flowEngine.updateNode(`ingredient:${i.id}`, { quantity: i.quantity });
  }
}
