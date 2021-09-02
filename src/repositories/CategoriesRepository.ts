import { Category } from '../model/Category';

interface ICreateCategoryDTO{
    name: string;
    description: string;
}

class CategoriesRepository {
    private categories: Category[];

    constructor() {
      this.categories = [];
    }

    create({ name, description }: ICreateCategoryDTO) : Category {
      const category = new Category();

      // esse método poderia ser o acesso as props ou receber o valor no ctor
      Object.assign(category, {
        name,
        description,
        createdAd: new Date(),
      });

      this.categories.push(category);
      return category;
    }
}

export { CategoriesRepository };
