import { Category } from '../model/Category';
import { ICategoriesRepository, ICreateCategoryDTO } from './ICategoriesRepository';

class CategoriesRepository implements ICategoriesRepository {
    private categories: Category[];

    constructor() {
      this.categories = [];
    }

    create({ name, description }: ICreateCategoryDTO) : void {
      const category = new Category();

      // esse método poderia ser o acesso as props ou receber o valor no ctor
      Object.assign(category, {
        name,
        description,
        createdAd: new Date(),
      });

      this.categories.push(category);
    }

    list() : Category[] {
      return this.categories;
    }

    findByName(name: string) : Category {
      const category = this.categories.find((c) => c.name === name);
      return category;
    }
}

export { CategoriesRepository };
