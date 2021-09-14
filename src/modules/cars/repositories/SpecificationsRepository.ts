import { Specifications } from '../model/Specifications';
import { ICreateSpecificationDTO, ISpecificationsRepository } from './ISpecificationsRepository';

class SpecificationsRepository implements ISpecificationsRepository {
  private specifications : Specifications[];

  constructor() {
    this.specifications = [];
  }

  create({ name, description }: ICreateSpecificationDTO): void {
    const specification = new Specifications();

    Object.assign(specification, {
      name,
      description,
      createdAt: new Date(),
    });

    this.specifications.push(specification);
  }

  findByName(name: string): Specifications {
    const specification = this.specifications.find((x) => x.name === name);
    return specification;
  }

  list(): Specifications[] {
    return this.specifications;
  }
}

export { SpecificationsRepository };
