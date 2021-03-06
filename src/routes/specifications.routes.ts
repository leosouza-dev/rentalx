import { Router } from 'express';
import { SpecificationsRepository } from '../modules/cars/repositories/SpecificationsRepository';
import { CreateSpecificationService } from '../modules/cars/services/CreateSpecificationService';

const specificationsRoutes = Router();

const specificationsRepository = new SpecificationsRepository();

specificationsRoutes.post('/', (request, response) => {
  const { name, description } = request.body;
  const createSpecificationsService = new CreateSpecificationService(specificationsRepository);
  createSpecificationsService.execute({ name, description });
  return response.status(201).send();
});

specificationsRoutes.get('/', (request, response) => {
  const specifications = specificationsRepository.list();
  return response.status(200).json(specifications);
});

export { specificationsRoutes };
