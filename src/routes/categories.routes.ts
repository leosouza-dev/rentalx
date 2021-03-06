import { Router } from 'express';
import { CategoriesRepository } from '../modules/cars/repositories/CategoriesRepository';
import { createCategoryController } from '../modules/cars/useCases/createCategory';

const categoriesRoutes = Router();

// poderia ser de outro tipo que implementa a interface e continuaria funcionando - devido a interf.
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post('/', (request, response) => createCategoryController.handle(request, response));

categoriesRoutes.get('/', (request, response) => {
  const categories = categoriesRepository.list();
  return response.status(200).json(categories);
});

export { categoriesRoutes };
