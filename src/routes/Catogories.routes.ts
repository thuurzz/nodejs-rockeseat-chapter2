import { Router } from "express";

import { CategoriesRepository } from "../modules/cars/repository/CategoriesRepository";
import { createCategoryController } from "../modules/cars/useCases/createCatogory";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (req, res) => {
  return createCategoryController.handle(req, res);
});

categoriesRoutes.get("/", (req, res) => {

  const categories = categoriesRepository.list();

  return res.status(200).json(categories);
});

export { categoriesRoutes };
