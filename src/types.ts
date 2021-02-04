export type IngredientList = {[name: string]: number}

//Or you could do
// export type Ingredient = 'bread' | 'lettuce' | 'tomato' | 'cheese' |'bacon' | 'turkey';
// export type IngredientList = Record<Ingredient, number>

export interface OrderItem {
  name: string;
  price: number;
  image?: string;
  ingredients?: IngredientList;
  onAddToOrder?: () => void;
}