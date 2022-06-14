import { CategoriesRepository } from "../../repository/CategoriesRepository";
import { CreateCategoryController } from "./CreateCategoryController";
import { CreateCategoryUseCase } from "./CreateCategotyUseCase";


const categoriesRepository = new CategoriesRepository();

const createCategoryUsecase = new CreateCategoryUseCase(categoriesRepository);

const createCategoryController = new CreateCategoryController(createCategoryUsecase);

export { createCategoryController }
