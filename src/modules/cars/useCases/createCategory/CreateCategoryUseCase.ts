import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

interface IRequest {
    name: string;
    description: string;
}

interface ICreateCategoryUseCase{
    execute({ name, description } : IRequest) : void;
}

class CreateCategoryUseCase implements ICreateCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  execute({ name, description } : IRequest) : void {
    const existsCategory = this.categoriesRepository.findByName(name);

    if (existsCategory) throw new Error('Category already exists!');

    this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryUseCase, ICreateCategoryUseCase };
