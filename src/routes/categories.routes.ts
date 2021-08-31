import { Router } from 'express';
import { Category } from '../model/Category';

const categoriesRoutes = Router();
const categories: Category[] = [];

categoriesRoutes.post('/', (request, response) => {
  const { name, description } = request.body;

  const category = new Category();
  //   category.name = name;
  //   category.description = description;
  //   category.createdAt = new Date();
  Object.assign(category, { // daria no mesmo que ir atributo a atributo ou no ctor
    name,
    description,
    createdAd: new Date(),
  });

  categories.push(category);

  return response.status(201).json({ category });
});

export { categoriesRoutes };
