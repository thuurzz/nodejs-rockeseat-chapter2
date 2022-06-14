import { CategoriesRepository } from "../../repository/CategoriesRepository";
import { ListCategoriesController } from "./ListCategoriesController";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

const categoriesRepository = new CategoriesRepository();

const listCategoriesUseCase = new ListCategoriesUseCase(categoriesRepository);

const listCategoriesController = new ListCategoriesController(listCategoriesUseCase);


export { listCategoriesController }