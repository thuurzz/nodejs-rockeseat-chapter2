import { Router } from "express";

import { CategoriesRepository } from "../modules/cars/repository/CategoriesRepository";
import { CreateCategoryService } from "../modules/cars/services/CreateCategotyService";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (req, res) => {
  const { name, description } = req.body;

  const createCategoryService = new CreateCategoryService(categoriesRepository);

  createCategoryService.execute({ name, description });

  return res.status(201).send();

});

categoriesRoutes.get("/", (req, res) => {

  const categories = categoriesRepository.list();

  return res.status(200).json(categories);
});

export { categoriesRoutes };
