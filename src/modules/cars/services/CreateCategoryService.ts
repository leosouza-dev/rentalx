import { ICategoriesRepository } from '../repositories/ICategoriesRepository';

interface IRequest {
    name: string;
    description: string;
}

interface ICreateCategoryService{
    execute({ name, description } : IRequest) : void;
}

class CreateCategoryService implements ICreateCategoryService {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  execute({ name, description } : IRequest) : void {
    const existsCategory = this.categoriesRepository.findByName(name);

    if (existsCategory) throw new Error('Category already exists!');

    this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryService, ICreateCategoryService };
