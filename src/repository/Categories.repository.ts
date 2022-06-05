import { Category } from "../model/category";

interface ICreateCategotyDTO {
  name: string;
  description: string;
}

class CategoriesRepository {

  private categories: Category[];

  constructor() {
    this.categories = [];
  }

  create({ name, description }: ICreateCategotyDTO): void {

    const category = new Category();

    Object.assign(category, {
      name,
      description,
      created_at: new Date()
    });

    this.categories.push(category);
  }

}


export { CategoriesRepository }
