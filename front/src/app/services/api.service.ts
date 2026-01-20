import {Injectable} from '@angular/core';
import {DishIngredient, Guest} from '../models/models';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  getGuests() {
    return this.http.get<Guest[]>('/api/main/guests');
  }

  getDishIngredients() {
    return this.http.get<DishIngredient[]>('/api/main/dish_ingredients');
  }
}
