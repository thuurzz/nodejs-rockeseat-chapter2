import { Category } from "../model/category";
import { ICategoryRepository, ICreateCategotyDTO } from "./IcategoriesRepository";

class PostgresCategoriesRepository implements ICategoryRepository {
  findByName(name: string): Category {
    console.log(name);
    return null;
  }
  list(): Category[] {
    return null;
  }
  create({ name, description }: ICreateCategotyDTO): void {
    console.log(name, description);
    return null;
  }

}

export { PostgresCategoriesRepository }
