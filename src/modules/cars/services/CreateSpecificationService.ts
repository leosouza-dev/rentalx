import { ISpecificationsRepository } from '../repositories/ISpecificationsRepository';

interface IRequest {
    name: string;
    description: string;
}

interface ICreateSpecificationService{
    execute({ name, description } : IRequest): void;
}

class CreateSpecificationService implements ICreateSpecificationService {
  constructor(private specificationsRepository: ISpecificationsRepository) {}

  execute({ name, description }: IRequest): void {
    const existsSpecification = this.specificationsRepository.findByName(name);

    if (existsSpecification) throw new Error('Specifications already exists!');

    this.specificationsRepository.create({ name, description });
  }
}

export { CreateSpecificationService };
