import { Injectable } from '@nestjs/common';
import { NewRecipeInput } from './dto/new-recipe.input';
import { RecipesArgs } from './dto/recipes.args';
import { Recipe } from './models/recipe.model';

const mockRecipes: Recipe[] = [
  { id: '1', title: 'recipe 1', creationDate: new Date(), ingredients: [] },
  { id: '2', title: 'recipe 2', creationDate: new Date(), ingredients: [] },
  { id: '3', title: 'recipe 3', creationDate: new Date(), ingredients: [] },
  { id: '4', title: 'recipe 4', creationDate: new Date(), ingredients: [] },
  { id: '5', title: 'recipe 5', creationDate: new Date(), ingredients: [] },
];

@Injectable()
export class RecipesService {
  /**
   * MOCK
   * Put some real business logic here
   * Left for demonstration purposes
   */

  async create(data: NewRecipeInput): Promise<Recipe> {
    const id = (mockRecipes.length + 1).toString();

    return {
      id,
      title: data.title,
      description: data.description ?? '',
      creationDate: new Date(),
      ingredients: data.ingredients,
    };
  }

  async findOneById(id: string): Promise<Recipe> {
    return mockRecipes.find((recipe) => recipe.id === id);
  }

  async findAll(recipesArgs: RecipesArgs): Promise<Recipe[]> {
    return mockRecipes;
  }

  async remove(id: string): Promise<boolean> {
    // not implemented
    return true;
  }
}
