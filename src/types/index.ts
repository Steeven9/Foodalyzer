export interface Ingredient {
  _id: string;
  name: string;
  calories: number;
  category: string;
  description?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface DishIngredient {
  ingredientId: Ingredient | string;
  weight: number;
}

export interface Dish {
  _id: string;
  name: string;
  ingredients: DishIngredient[];
  createdAt?: string;
  updatedAt?: string;
}

export interface MealDish {
  dishId: Dish | string;
}

export interface Meal {
  _id: string;
  date: string;
  mealType: "breakfast" | "lunch" | "dinner" | "snack";
  dishes: MealDish[];
  createdAt?: string;
  updatedAt?: string;
}
